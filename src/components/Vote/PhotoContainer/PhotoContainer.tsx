import React, { useState } from 'react';
import { BoxBig, BoxMiddle, EmptyPic, Fly } from 'assets/icon';
import * as S from './Styles';
import PhotoAddBtn from './PhotoAddBtn';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const PhotoContainer = () => {
  const { state } = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const photoPerPage = 4;
  const hasPhotos = state && state.srcs && Array.isArray(state.srcs);

  const pageCount = hasPhotos ? Math.ceil(state.srcs.length / photoPerPage) : 0;

  const handleSwipedLeft = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSwipedRight = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
    trackMouse: true,
  });

  const displayPhotos = hasPhotos
    ? state.srcs.slice(
        currentPage * photoPerPage,
        (currentPage + 1) * photoPerPage,
      )
    : [];

  return (
    <>
      {hasPhotos ? (
        <S.Layout>
          {state?.srcs.length > 2 ? (
            <>
              <BoxBig style={{ position: 'absolute', width: '100%' }} />
              <S.PicContainer {...swipeHandlers}>
                {displayPhotos.map((src: string, i: number) => (
                  <S.PicImg key={i} src={src} />
                ))}
              </S.PicContainer>
              {state?.srcs.length > 4 && (
                <S.Pagination>
                  {Array.from({ length: pageCount }).map((_, index) => (
                    <S.PageDot key={index} active={index === currentPage} />
                  ))}
                </S.Pagination>
              )}
              <PhotoAddBtn />
            </>
          ) : (
            <>
              <BoxMiddle style={{ position: 'absolute', width: '100%' }} />
              <S.PicContainer {...swipeHandlers} style={{ height: '7rem' }}>
                {displayPhotos.map((src: string, i: number) => (
                  <S.PicImg key={i} src={src} />
                ))}
              </S.PicContainer>
              <PhotoAddBtn />
            </>
          )}
        </S.Layout>
      ) : (
        <>
          <S.TextLayout>
            <Fly style={{ width: '6%' }} />
            <S.TextContainer>+를 눌러 사진을 추가해주세요.</S.TextContainer>
          </S.TextLayout>
          <S.Layout>
            <BoxMiddle style={{ position: 'absolute', width: '100%' }} />
            <S.EmptyContainer>
              <EmptyPic width={'45%'} />
              <EmptyPic width={'45%'} />
            </S.EmptyContainer>
            <PhotoAddBtn />
          </S.Layout>
        </>
      )}
    </>
  );
};

export default PhotoContainer;
