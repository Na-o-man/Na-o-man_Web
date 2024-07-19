// Share Group 1,2페이지 레이아웃
import React from 'react';
import Header from 'components/Header/Header';
import NavigationBar from 'components/navigationbar/NavigationBar';
import * as S from './Styles';
import * as I from 'assets/icon';

const ShareGroupMain = () => {
  return (
    <S.Layout>
      <Header hamburger />
      <I.GroupList />
      <NavigationBar />
    </S.Layout>
  );
};

export default ShareGroupMain;
