import React from 'react';
import * as S from './Styles';

const HeadCount = () => {
  return (
    <S.Layout>
      <S.Fly />
      <S.Text>몇 명이서 사진을 공유할 건가요?</S.Text>
      <S.InputCountContainer>
        <S.Input />
        <S.InputCounterText>인원 수를 입력해주세요.</S.InputCounterText>
      </S.InputCountContainer>
      <S.NextArrow />
    </S.Layout>
  );
};

export default HeadCount;