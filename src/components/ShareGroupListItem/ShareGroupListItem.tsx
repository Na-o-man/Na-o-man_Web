import React from 'react';
import * as S from './Styles';

const ShareGroupListItem: React.FC = () => {
  return (
    <S.Layout>
      <S.GroupList />
      <S.Profile />
      <S.Container>
        <S.Title>보라카이 여행</S.Title>
        <S.DateBox>
          <S.PeopleCountBox>
            <S.PeopleIcon />
            <S.DateText>3</S.DateText>
          </S.PeopleCountBox>
          <S.DateText>2024.10.08</S.DateText>
        </S.DateBox>
      </S.Container>
    </S.Layout>
  );
};

export default ShareGroupListItem;
