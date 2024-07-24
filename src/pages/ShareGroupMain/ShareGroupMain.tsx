// Share Group 1,2페이지 레이아웃
import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles';
import ShareGruopListView from 'components/ShareGroup/ShareGroupListView/ShareGruopListView';
import ShareGroupAddButton from 'components/ShareGroup/ShareGroupAddButton/ShareGroupAddButton';
import ShareGroupFolderView from 'components/ShareGroup/ShareGroupFolderView/ShareGroupFolderView';
import ShareGroupCarousel from 'components/ShareGroup/ShareGroupCarousel/ShareGroupCarousel';
import ShareGroupCloudButton from 'components/ShareGroup/ShareGroupCloudButton/ShareGroupCloudButton';

interface ListItem {
  id: number;
  title: string;
  date: string;
  peopleCount: number;
}

const ShareGroupMain: React.FC = () => {
  const sampleItems: ListItem[] = [
    { id: 1, title: '보라콰이 여행', date: '2024.10.08', peopleCount: 10 },
    { id: 1, title: '보라콰이 여행', date: '2024.10.08', peopleCount: 10 },
    { id: 1, title: '보라콰이 여행', date: '2024.10.08', peopleCount: 10 },
    { id: 1, title: '보라콰이 여행', date: '2024.10.08', peopleCount: 10 },
  ];

  return (
    <S.Layout isRightCloud={true}>
      <Header hamburger />
      {/* <ShareGroupAddButton /> */}
      <ShareGruopListView items={sampleItems} />
      {/* <ShareGroupFolderView /> */}
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
