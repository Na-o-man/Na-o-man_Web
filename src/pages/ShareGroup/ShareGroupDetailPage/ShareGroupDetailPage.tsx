import React, { useState } from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from 'components/Common/DropDown/DropDown';
import ShareGroupImageList from 'components/ShareGroup/ShareGroupImageList/ShareGroupImageList';
import ShareGroupBottomBar from 'components/ShareGroup/ShareGroupBottomBar/ShareGroupBottomBar';
import logo from 'assets/design/logo/symbol.png';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ShareGroupDetailPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // api 호출
  const getProfileImage = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/photos?shareGroupId=${location.state.shareGroupId}&faceTag=${location.state.profileId}&page={0}`,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <S.CloudLayout>
        <S.LoadingContainer>
          <S.LoadingLogo src={logo} alt="logo" width="60px" height="60px" />
          <S.LoadingText>사진 분류 중입니다...</S.LoadingText>
        </S.LoadingContainer>
      </S.CloudLayout>
    );
  }
  return (
    <S.Layout>
      <S.TopRectContainer>
        <S.TopRect />
        <S.DropDownContainer>
          <DropDown noIndexTag dataList={location.state.profileId} />
        </S.DropDownContainer>
      </S.TopRectContainer>
      <Header backarrow checkbtn />
      <ShareGroupImageList />
      <ShareGroupBottomBar button delButton />
    </S.Layout>
  );
};

export default ShareGroupDetailPage;
