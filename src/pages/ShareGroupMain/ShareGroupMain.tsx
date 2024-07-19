// Share Group 1,2페이지 레이아웃
import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import ShareGroupAddButton from 'components/ShareGroupAddButton/ShareGroupAddButton';
import * as S from './Styles';

const ShareGroupMain = () => {
  return (
    <S.Layout>
      <Header hamburger />
      <ShareGroupAddButton />
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
