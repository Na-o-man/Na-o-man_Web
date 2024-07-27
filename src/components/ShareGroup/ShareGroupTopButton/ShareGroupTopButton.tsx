import React from 'react';
import * as S from './Styles';

const ShareGroupTopButton: React.FC = () => {
  return (
    <S.Layout>
      <S.TopBtn />
      <S.Container>
        <S.Title>2024 졸업 전시</S.Title>
        <S.DateBox>
          <S.PeopleCountBox>
            <S.PeopleIcon />
            <S.DateText>12</S.DateText>
          </S.PeopleCountBox>
          <S.DateText>1232.23.12</S.DateText>
        </S.DateBox>
      </S.Container>
    </S.Layout>
  );
};

export default ShareGroupTopButton;
