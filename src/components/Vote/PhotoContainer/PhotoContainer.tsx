import React from 'react';
import { BoxBig, BoxMiddle, EmptyPic, Fly } from 'assets/icon';
import * as S from './Styles';
import PhotoAddBtn from './PhotoAddBtn';
import { useLocation } from 'react-router-dom';

const PhotoContainer = () => {
  const { state } = useLocation();
  return (
    <>
      {state?.srcs.length > 0 ? (
        <S.Layout>
          {state?.srcs.length > 2 ? (
            <BoxBig style={{ position: 'absolute', width: '100%' }} />
          ) : (
            <BoxMiddle style={{ position: 'absolute', width: '100%' }} />
          )}
          <S.PicContainer>
            {state?.srcs.map((src: string, i: number) => (
              <S.PicImg key={i} src={src} />
            ))}
          </S.PicContainer>
          <PhotoAddBtn />
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
