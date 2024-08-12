import React from 'react';
import * as S from './Styles';
import { Outlet } from 'react-router-dom';
import sky from '../../../assets/background/sky.png';
import TypoBlurred from '../../../assets/logo/typo-blurred.png';
import symbol from '../../../assets/logo/symbol.png';

const EnterLogin = () => {
  const KAKAO_AUTH_URL = 'https://naoman.site/oauth2/authorization/kakao';
  const GOOGLE_AUTH_URL = 'https://naoman.site/oauth2/authorization/google';

  return (
    <>
      <S.LayOut>
        <S.Symbol src={symbol} />
        <S.Background src={sky} />
        <S.Logo src={TypoBlurred} />
        <a href={GOOGLE_AUTH_URL}>
          <S.GoogleLogin />
        </a>
        <a href={KAKAO_AUTH_URL}>
          <S.KakaoLogin />
        </a>
      </S.LayOut>
      <Outlet />
    </>
  );
};

export default EnterLogin;
