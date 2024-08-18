// Share Group 1,2페이지 레이아웃
import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles';
import ShareGruopListView from 'components/ShareGroup/ShareGroupListView/ShareGruopListView';
import ShareGroupAddButton from 'components/ShareGroup/ShareGroupAddButton/ShareGroupAddButton';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { shareGroupListState } from 'recoil/states/share_group';
import { getMyShareGroup } from 'apis/getMyShareGroup';
import Loading from 'components/Loading/Loading';
import { dropdownData } from 'recoil/states/vote';

const ShareGroupMain: React.FC = () => {
  const [shareGroupList, setShareGroupList] =
    useRecoilState(shareGroupListState);
  const setDropdownData = useSetRecoilState(dropdownData);

  useEffect(() => {
    getMyShareGroup().then((res) => {
      if (res.data.hasOwnProperty('shareGroupInfoList')) {
        setShareGroupList(res.data.shareGroupInfoList);
        setDropdownData(res.data.shareGroupInfoList);
      }
    });
  }, []);

  if (!Array.isArray(shareGroupList)) {
    return (
      <S.Layout isRightCloud={shareGroupList ? true : false}>
        <Loading text={'로딩 중입니다...'} />
      </S.Layout>
    );
  }
  return (
    <S.Layout isRightCloud={shareGroupList ? true : false}>
      <Header hamburger />
      {shareGroupList.length > 0 ? (
        <ShareGruopListView />
      ) : (
        <ShareGroupAddButton />
      )}
      {shareGroupList.length > 0 && (
        <S.CloudContainer>
          <S.Cloud />
        </S.CloudContainer>
      )}
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
