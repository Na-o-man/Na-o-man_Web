import { useState, useEffect, useRef, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { folderCurrentIndex } from 'recoil/states/share_group';

export const useCarousel = (
  itemCount: number,
  containerRef: React.RefObject<HTMLDivElement>,
) => {
  const [currentIndex, setCurrentIndex] = useRecoilState(folderCurrentIndex);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const updateOffset = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newOffset = -currentIndex * containerWidth * 0.65;

      setOffset(newOffset);
    }
  }, [currentIndex, containerRef]);

  useEffect(() => {
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, [updateOffset]);

  const handleSwipe = useCallback(
    (direction: 'left' | 'right') => {
      if (direction === 'left' && currentIndex < itemCount - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (direction === 'right' && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    },
    [currentIndex, itemCount],
  );

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
  }, []);

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      const diff = startX.current - clientX;
      if (Math.abs(diff) > 50) {
        handleSwipe(diff > 0 ? 'left' : 'right');
        setIsDragging(false);
      }
    },
    [isDragging, handleSwipe],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleSwipe('right');
      } else if (e.key === 'ArrowRight') {
        handleSwipe('left');
      }
    },
    [handleSwipe],
  );

  return {
    currentIndex,
    offset,
    isDragging,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleKeyDown,
  };
};
