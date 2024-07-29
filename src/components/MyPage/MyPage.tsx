import React from 'react';
import * as S from './Styles';
import * as I from 'assets/icon';
import logoblurred from '../../assets/logo/typo-blurred.png';
import Header from 'components/Header/Header';
import {
  Background,
  StyledCloud,
  Profile,
  LogOutBtn,
  OutServiceBtn,
} from './Styles';
import background from 'assets/background/cloudLeft.png';
import Modal from './Modal/Modal';
const MyPage = () => {
  return (
    <S.Layout>
      <S.H>
        <Header backarrow></Header>
      </S.H>
      <Background src={background}></Background>
      <Profile />
      <S.Logo src={logoblurred} />
      <S.NameText style={{ top: '45%', left: '50%' }}>
        <div>이메일</div>
      </S.NameText>
      <S.NameText
        style={{
          top: '48%',
          left: '50%',
          fontSize: '20px',
          fontWeight: 'bolder',
        }}
      >
        <div>이름</div>
      </S.NameText>
      <LogOutBtn />
      <OutServiceBtn />
      <S.BtnText style={{ top: '64%', left: '50%' }}>
        <div>로그아웃</div>
      </S.BtnText>
      <S.BtnText style={{ top: '71%', left: '50%' }}>
        <div>회원 탈퇴</div>
      </S.BtnText>
      <StyledCloud />
    </S.Layout>
  );
};

export default MyPage;
