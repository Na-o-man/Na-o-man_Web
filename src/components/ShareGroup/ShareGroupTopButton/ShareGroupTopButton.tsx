import React from 'react';
import * as S from './Styles';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { shareGroupListState } from 'recoil/states/share_group';
import { newGroupData } from 'recoil/states/addgroupState';

const ShareGroupTopButton: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [shareGroupList] = useRecoilState(shareGroupListState);
  const newGroup = useRecoilValue(newGroupData);

  const group = shareGroupList.find(
    (group) => group.shareGroupId === Number(id),
  );

  return (
    <S.Layout>
      <S.TopBtn />
      <S.Container>
        <S.Title>{group?.name || newGroup?.name}</S.Title>
        <S.DateBox>
          <S.PeopleCountBox>
            <S.PeopleIcon />
            <S.DateText>
              {group?.memberCount || newGroup?.memberCount}
            </S.DateText>
          </S.PeopleCountBox>
          <S.DateText>{group?.createdAt || newGroup?.createdAt}</S.DateText>
        </S.DateBox>
      </S.Container>
    </S.Layout>
  );
};

export default ShareGroupTopButton;
