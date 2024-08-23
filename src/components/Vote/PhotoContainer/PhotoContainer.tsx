import React, { useEffect, useState } from 'react';
import { BoxBig, BoxMiddle, EmptyPic, Fly } from 'assets/icon';
import * as S from './Styles';
import PhotoAddBtn from './PhotoAddBtn';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { useRecoilState } from 'recoil';
import { addedAgendaPhotos, addedAgendaSrcs } from 'recoil/states/vote';

const PhotoContainer = () => {
  const { state } = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const photoPerPage = 4;
  const hasPhotos = state && state.srcs && Array.isArray(state.srcs);
  const [photos, setPhotos] = useRecoilState(addedAgendaPhotos);
  const [srcs, setSrcs] = useRecoilState(addedAgendaSrcs);
  const pageCount = hasPhotos ? Math.ceil(photos.length / photoPerPage) : 0;

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

  const displayPhotos =
    photos.length > 0
      ? photos.slice(
          currentPage * photoPerPage,
          (currentPage + 1) * photoPerPage,
        )
      : [];

  useEffect(() => {
    console.log(state);
    if (hasPhotos) {
      if (state && state.scr && photos.length + state.srcs.length > 6) {
        alert('최대 사진 등록 개수는 6장입니다');
        return;
      } else {
        const newPhotos = [
          ...photos,
          ...state.srcs.filter((src: string) => !photos.includes(src)),
        ];
        const newSources = [
          ...srcs,
          ...state.photos.filter((id: number) => !srcs.includes(id)),
        ];
        if (newPhotos.length > 6) {
          return;
        }
        setPhotos(newPhotos);
        setSrcs(newSources);
      }
    } else {
      setPhotos([]);
      setSrcs([]);
    }
    console.log(srcs);
  }, [hasPhotos]);

  useEffect(() => {
    setCurrentPage(0); // 새 사진이 추가될 때마다 페이지를 초기화할 수 있습니다.
  }, [photos]);

  return (
    <>
      {hasPhotos ? (
        <S.Layout>
          {photos.length > 2 ? (
            <>
              <BoxBig style={{ position: 'absolute', width: '100%' }} />
              <S.PicContainer {...swipeHandlers}>
                {displayPhotos.map((src: string, i: number) => (
                  <S.PicImg key={i} src={src} />
                ))}
              </S.PicContainer>
              {photos.length > 4 && (
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
