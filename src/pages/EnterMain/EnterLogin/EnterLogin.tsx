import React from 'react';
import EnterMain from '../EnterMain';
import * as S from './Styles';
const EnterLogin = () => {
  return (
    <>
      <EnterMain></EnterMain>
      <S.GoogleLogin />
      <S.KakaoLogin />
    </>
  );
};

export default EnterLogin;
