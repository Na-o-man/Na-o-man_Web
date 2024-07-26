// Share Group 1,2페이지 레이아웃
import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import * as S from './Styles';
import ShareGruopListView from 'components/ShareGroup/ShareGroupListView/ShareGruopListView';

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
    { id: 1, title: '보라콰이 여행', date: '2024.10.08', peopleCount: 10 },
    {
      id: 1,
      title: '보라콰이 여행 가고싶어 나도몰라',
      date: '2024.10.08',
      peopleCount: 10,
    },
    { id: 1, title: '보라콰이 여행', date: '2024.10.08', peopleCount: 10 },
    { id: 1, title: '보라콰이 여행', date: '2024.10.08', peopleCount: 10 },
  ];
  return (
    <S.Layout>
      <Header hamburger />
      <ShareGruopListView items={sampleItems} />
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
