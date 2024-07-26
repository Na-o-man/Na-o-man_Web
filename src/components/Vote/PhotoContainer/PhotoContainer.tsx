import React from 'react';
import { BoxBig, BoxMiddle, EmptyPic } from 'assets/icon';
import * as S from './Styles';
import PhotoAddBtn from './PhotoAddBtn';

const PhotoContainer = () => {
  const mockData = [null, null, null];
  return (
    <S.Layout>
      {mockData.length > 2 ? (
        <BoxBig style={{ position: 'absolute', width: '100%' }} />
      ) : (
        <BoxMiddle style={{ position: 'absolute', width: '100%' }} />
      )}
      <S.PicContainer>
        {mockData.map((_, i) => (
          <EmptyPic key={i} width={'45%'} />
        ))}
      </S.PicContainer>
      <PhotoAddBtn />
    </S.Layout>
  );
};

export default PhotoContainer;
