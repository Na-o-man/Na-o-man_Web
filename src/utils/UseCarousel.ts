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
  const startY = useRef(0); // 추가된 부분
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

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

  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    setIsDragging(true);
    startX.current = clientX;
    startY.current = clientY; // 추가된 부분
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }
  }, []);

  const handleDragMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return;
      const diffX = startX.current - clientX;
      const diffY = startY.current - clientY; // 추가된 부분

      // 수평 이동 거리가 수직 이동 거리보다 큰 경우에만 드래그로 간주
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        handleSwipe(diffX > 0 ? 'left' : 'right');
        setIsDragging(false);
      }
    },
    [isDragging, handleSwipe],
  );

  const handleDragEnd = useCallback(() => {
    clickTimeout.current = setTimeout(() => {
      setIsDragging(false);
    }, 300); // 300ms 이내에 드래그가 끝나면 클릭으로 간주
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      handleDragStart(touch.clientX, touch.clientY);
    },
    [handleDragStart],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      handleDragMove(touch.clientX, touch.clientY);
    },
    [handleDragMove],
  );

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

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
    handleTouchStart, // 추가된 부분
    handleTouchMove, // 추가된 부분
    handleTouchEnd, // 추가된 부분
    handleKeyDown,
  };
};
