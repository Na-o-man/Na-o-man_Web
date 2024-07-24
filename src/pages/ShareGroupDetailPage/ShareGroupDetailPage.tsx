import React from 'react';
import * as S from './Styles';
import logo from '../../assets/design/logo/symbol.png';
import Header from 'components/Header/Header';
import DropDown from 'components/Common/DropDown/DropDown';
import ShareGroupImageList from 'components/ShareGroup/ShareGroupImageList/ShareGroupImageList';

const ShareGroupDetailPage: React.FC = () => {
  return (
    <S.Layout>
      <S.TopRectContainer>
        <S.TopRect />
      </S.TopRectContainer>
      <Header backarrow checkbtn />
      <ShareGroupImageList />
      <S.BottomBarContainer>
        <S.BottomBar />
        <S.Symbol src={logo} alt="logo" />
      </S.BottomBarContainer>
    </S.Layout>
  );
};

export default ShareGroupDetailPage;
