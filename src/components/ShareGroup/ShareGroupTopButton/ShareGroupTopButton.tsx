import React from 'react';
import * as S from './Styles';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { shareGroupListState } from 'recoil/states/share_group';

const ShareGroupTopButton: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [shareGroupList] = useRecoilState(shareGroupListState);

  const group = shareGroupList.find(
    (group) => group.shareGroupId === Number(id),
  );

  return (
    <S.Layout>
      <S.TopBtn />
      <S.Container>
        <S.Title>{group?.name || ''}</S.Title>
        <S.DateBox>
          <S.PeopleCountBox>
            <S.PeopleIcon />
            <S.DateText>{group?.memberCount || ''}</S.DateText>
          </S.PeopleCountBox>
          <S.DateText>{group?.createdAt || ''}</S.DateText>
        </S.DateBox>
      </S.Container>
    </S.Layout>
  );
};

export default ShareGroupTopButton;
