import React from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from 'components/Common/DropDown/DropDown';
import ShareGroupImageList from 'components/ShareGroup/ShareGroupImageList/ShareGroupImageList';
import ShareGroupBottomBar from 'components/ShareGroup/ShareGroupBottomBar/ShareGroupBottomBar';

const ShareGroupDetailPage: React.FC = () => {
  return (
    <S.Layout>
      <S.TopRectContainer>
        <S.TopRect />
      </S.TopRectContainer>
      <Header backarrow checkbtn />
      <ShareGroupImageList />
      <ShareGroupBottomBar button delButton />
    </S.Layout>
  );
};

export default ShareGroupDetailPage;
