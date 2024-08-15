// Share Group 1,2페이지 레이아웃
import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles';
import ShareGruopListView from 'components/ShareGroup/ShareGroupListView/ShareGruopListView';
import ShareGroupAddButton from 'components/ShareGroup/ShareGroupAddButton/ShareGroupAddButton';
import { useRecoilState } from 'recoil';
import { shareGroupListState } from 'recoil/states/share_group';
import { getMyShareGroup } from 'apis/getMyShareGroup';

const ShareGroupMain: React.FC = () => {
  const [shareGroupList, setShareGroup] = useRecoilState(shareGroupListState);

  useEffect(() => {
    console.log(shareGroupList);
    getMyShareGroup().then((res) => {
      if (res === null) {
        setShareGroup([]);
        return;
      }
      setShareGroup(res);
    });
  }, []);

  return (
    <S.Layout isRightCloud={shareGroupList ? true : false}>
      <Header hamburger />
      {shareGroupList ? (
        <ShareGruopListView items={shareGroupList} />
      ) : (
        <ShareGroupAddButton />
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
