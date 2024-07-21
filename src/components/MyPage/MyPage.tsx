import React from 'react';
import * as S from './Styles';
import * as I from 'assets/icon';
import logoblurred from '../../assets/logo/typo-blurred.png';
import Header from 'components/Header/Header';

import { StyledCloud, Profile, LogOutBtn, OutBtn } from './Styles';

const MyPage = () => {
  return (
    <S.MyPageLayout>
      <S.H>
        <Header backarrow></Header>
      </S.H>
      <I.UpperCloudHeavy style={{ position: 'absolute', width: '100%' }} />
      <S.ProfileContainer>
        <Profile />
        <S.ProfileFontE>
          <div>이메일</div>
        </S.ProfileFontE>
        <S.ProfileFontN>
          <div>이름</div>
        </S.ProfileFontN>
      </S.ProfileContainer>
      <S.LogoImage src={logoblurred} />
      <S.ButtonContainer>
        <S.LogOutText>로그아웃</S.LogOutText>
        <LogOutBtn></LogOutBtn>
        <S.OutText>회원 탈퇴</S.OutText>
        <OutBtn></OutBtn>
      </S.ButtonContainer>
      <StyledCloud />
    </S.MyPageLayout>
  );
};

export default MyPage;
