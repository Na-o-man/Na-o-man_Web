// Share Group 1,2페이지 레이아웃
import React, { useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import * as S from './Styles';
import ShareGroupFolderView from 'components/ShareGroup/ShareGroupFolderView/ShareGroupFolderView';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { shareGroupMemberListState } from 'recoil/states/share_group';
import { getShareGroupMembers } from 'apis/getMyShareGroup';

const ShareGroupFolder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [shareGroupMember, setShareGroupMember] = useRecoilState(
    shareGroupMemberListState,
  );

  useEffect(() => {
    getShareGroupMembers(Number(id)).then((res) => {
      const { profileInfoList } = res;
      if (profileInfoList === null) return;
      setShareGroupMember(profileInfoList);
    });
  }, [id]);

  return (
    <S.Layout isRightCloud={false}>
      <Header hamburger />
      <ShareGroupFolderView />
    </S.Layout>
  );
};

export default ShareGroupFolder;
