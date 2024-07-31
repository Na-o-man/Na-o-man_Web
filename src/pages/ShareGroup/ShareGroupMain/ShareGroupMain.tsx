// Share Group 1,2페이지 레이아웃
import React, { useState } from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles';
import ShareGruopListView from 'components/ShareGroup/ShareGroupListView/ShareGruopListView';
import ShareGroupAddButton from 'components/ShareGroup/ShareGroupAddButton/ShareGroupAddButton';
import { useRecoilState } from 'recoil';
import { shareGroupListState } from 'recoil/states/share_group';

const ShareGroupMain: React.FC = () => {
  // 회원 정보를 바탕으로 공유 그룹 리스트를 가져와야 함'
  const [shareGroupList, setShareGroup] = useRecoilState(shareGroupListState);
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setShowButton(!showButton);
  };

  return (
    <S.Layout isRightCloud={true}>
      <Header hamburger />
      {shareGroupList ? (
        <ShareGruopListView items={shareGroupList} />
      ) : (
        <ShareGroupAddButton showButton={showButton} onClick={handleClick} />
      )}
      {shareGroupList && (
        <S.CloudContainer>
          <S.Cloud />
        </S.CloudContainer>
      )}
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
