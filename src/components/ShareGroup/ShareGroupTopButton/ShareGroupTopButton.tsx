import React from 'react';
import * as S from './Styles';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { groupSelectorbyId } from 'recoil/selectors/sharegroup';

const ShareGroupTopButton: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const int = parseInt(id || '0');
  const group = useRecoilValue(groupSelectorbyId(int));

  return (
    <S.Layout>
      <S.TopBtn />
      <S.Container>
        <S.Title>{group.name}</S.Title>
        <S.DateBox>
          <S.PeopleCountBox>
            <S.PeopleIcon />
            <S.DateText>{group.memberCount}</S.DateText>
          </S.PeopleCountBox>
          <S.DateText>{group.createdAt}</S.DateText>
        </S.DateBox>
      </S.Container>
    </S.Layout>
  );
};

export default ShareGroupTopButton;
