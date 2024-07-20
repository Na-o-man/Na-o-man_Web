// Share Group 1,2페이지 레이아웃
import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles';
import ShareGroupListItem from 'components/ShareGroupListItem/ShareGroupListItem';

const ShareGroupMain: React.FC = () => {
  return (
    <S.Layout>
      <Header hamburger />
      <ShareGroupListItem />
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
