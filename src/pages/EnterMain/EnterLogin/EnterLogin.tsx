import React from 'react';
import * as S from './Styles';
import { Outlet } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
// import { loginState } from 'recoil/states/enter';
// import { useNavigate } from 'react-router-dom';

const EnterLogin = () => {
  const KAKAO_AUTH_URL = 'https://naoman.site/oauth2/authorization/kakao';
  const GOOGLE_AUTH_URL = 'https://naoman.site/oauth2/authorization/google';
  // const setLoginState = useSetRecoilState(loginState);
  // const navigate = useNavigate();
  // const handleGoogleLogin = () => {
  //   console.log('Google Login Clicked');
  //   setLoginState({ isLoggedIn: true, provider: 'google' });
  //   navigate('clause');
  // };

  // const handleKakaoLogin = () => {
  //   console.log('Kakao Login Clicked');
  //   setLoginState({ isLoggedIn: true, provider: 'kakao' });
  //   navigate('clause');
  // };

  return (
    <>
      <S.LayOut>
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
