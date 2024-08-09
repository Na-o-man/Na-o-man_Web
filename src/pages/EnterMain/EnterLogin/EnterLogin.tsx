import React from 'react';
import * as S from './Styles';
import { Outlet, useNavigate } from 'react-router-dom';
import sky from '../../../assets/background/sky.png';
import TypoBlurred from '../../../assets/logo/typo-blurred.png';
import symbol from '../../../assets/logo/symbol.png';
import { useSetRecoilState } from 'recoil';
import { loginState } from 'recoil/states/enter';

const EnterLogin = () => {
  const KAKAO_AUTH_URL = 'https://naoman.site/oauth2/authorization/kakao';
  const GOOGLE_AUTH_URL = 'https://naoman.site/oauth2/authorization/google';

  const setLoginState = useSetRecoilState(loginState);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    console.log('Google Login Clicked');
    // 로그인 API 호출 후 응답을 받는 로직 추가
    const response = await fetch(GOOGLE_AUTH_URL); // 예시로 Google URL 사용
    const isUserRegistered = await response.json(); // 회원가입 여부 확인

    if (isUserRegistered) {
      setLoginState({ isLoggedIn: true, provider: 'google' });
      navigate('home'); // 홈 또는 다른 페이지로 이동
    } else {
      navigate('clause'); // 회원가입이 안 되어 있으면 clause로 이동
    }
  };

  const handleKakaoLogin = async () => {
    console.log('Kakao Login Clicked');
    // 로그인 API 호출 후 응답을 받는 로직 추가
    const response = await fetch(KAKAO_AUTH_URL); // 예시로 Kakao URL 사용
    const isUserRegistered = await response.json(); // 회원가입 여부 확인

    if (isUserRegistered) {
      setLoginState({ isLoggedIn: true, provider: 'kakao' });
      navigate('home'); // 홈 또는 다른 페이지로 이동
    } else {
      navigate('clause'); // 회원가입이 안 되어 있으면 clause로 이동
    }
  };

  return (
    <>
      <S.LayOut>
        <S.Symbol src={symbol} />
        <S.Background src={sky} />
        <S.Logo src={TypoBlurred} />
        <a href={GOOGLE_AUTH_URL} onClick={handleGoogleLogin}>
          <S.GoogleLogin />
        </a>
        <a href={KAKAO_AUTH_URL} onClick={handleKakaoLogin}>
          <S.KakaoLogin />
        </a>
      </S.LayOut>
      <Outlet />
    </>
  );
};

export default EnterLogin;
