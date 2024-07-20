// Share Group 1,2페이지 레이아웃
import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles';
import ShareGroupListItem from 'components/ShareGroup/ShareGroupListItem/ShareGroupListItem';

const ShareGroupMain: React.FC = () => {
  return (
    <S.Layout>
      <Header hamburger />
      <ShareGroupListItem
        title={'보라카이 여행'}
        date={'2024.10.08'}
        peopleCount={10}
      />
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
