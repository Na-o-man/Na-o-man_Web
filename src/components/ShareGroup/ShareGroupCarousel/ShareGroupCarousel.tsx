import React, { useRef, useCallback } from 'react';
import * as S from './Styles';
import ShareGroupCarouselItem from '../ShareGroupCarouselItem/ShareGroupCarouselItem';
import { useCarousel } from 'utils/UseCarousel';

interface profile {
  profileId: number; // 프로필 id
  name: string; // 프로필 이름
  image: string | null; // URL 형식
  memberId: number; // 해당 프로필로 참여한 회원의 id. 생략할지 고민중
  isAllPhoto?: boolean; // 모든 사진을 볼 수 있는 폴더
  isEtcPhoto?: boolean; // 기타 사진을 볼 수 있는 폴더
}

interface CarouselProps {
  items: profile[];
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
        profileId={item.profileId}
        active={index === currentIndex}
        profileImage={item.image || ''}
        name={item.name}
        isAllPhoto={item.isAllPhoto || false}
        isEtcPhoto={item.isEtcPhoto || false}
      />
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
        <S.CarouselBlankItem isRight />
        {renderItems()}
        <S.CarouselBlankItem />
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
