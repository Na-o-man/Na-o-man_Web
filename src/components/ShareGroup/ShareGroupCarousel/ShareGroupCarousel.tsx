import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './Styles';
import ShareGroupCarouselItem from '../ShareGroupCarouselItem/ShareGroupCarouselItem';
import { useCarousel } from 'utils/UseCarousel';

interface CarouselProps {
  items: React.ReactNode[];
}

const ShareGroupCarousel: React.FC<CarouselProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    currentIndex,
    offset,
    isDragging,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleKeyDown,
  } = useCarousel(items.length, containerRef);

  const renderItems = useCallback(() => {
    return items.map((item, index) => (
      <ShareGroupCarouselItem
        key={index}
        active={index === currentIndex}
        aria-hidden={index !== currentIndex}
      >
        {item}
      </ShareGroupCarouselItem>
    ));
  }, [items, currentIndex]);

  return (
    <S.CarouselContainer
      ref={containerRef}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Image Carousel"
    >
      <S.CarouselTrack offset={offset} isDragging={isDragging}>
        {renderItems()}
      </S.CarouselTrack>
      <S.DotsContainer>
        {items.map((_, index) => (
          <S.Dot key={index} active={index === currentIndex} />
        ))}
      </S.DotsContainer>
    </S.CarouselContainer>
  );
};

export default ShareGroupCarousel;
