import React from 'react';
import * as S from './Styles';

interface ListProps {
  title: string;
  date: string;
  peopleCount: number;
}

const ShareGroupListItem: React.FC<ListProps> = ({
  title,
  date,
  peopleCount,
}) => {
  return (
    <S.Layout>
      <S.GroupList />
      <S.Profile />
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.DateBox>
          <S.PeopleCountBox>
            <S.PeopleIcon />
            <S.DateText>{peopleCount}</S.DateText>
          </S.PeopleCountBox>
          <S.DateText>{date}</S.DateText>
        </S.DateBox>
      </S.Container>
    </S.Layout>
  );
};

export default ShareGroupListItem;
