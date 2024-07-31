// Share Group 1,2페이지 레이아웃
import React, { useState } from 'react';
import Header from 'components/Header/Header';
import * as S from './Styles';
import ShareGroupFolderView from 'components/ShareGroup/ShareGroupFolderView/ShareGroupFolderView';
import { useParams } from 'react-router-dom';

const ShareGroupFolder: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const getShareGroup = async (id: string): Promise<void> => {
    // shareGroupId로 api call
  };

  return (
    <S.Layout isRightCloud={false}>
      <Header hamburger />
      <ShareGroupFolderView />
    </S.Layout>
  );
};

export default ShareGroupFolder;
