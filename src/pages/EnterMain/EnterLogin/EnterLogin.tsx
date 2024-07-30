import React from 'react';
import * as S from './Styles';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loginState } from 'recoil/states/enter';
import { useNavigate } from 'react-router-dom';

const EnterLogin = () => {
  const setLoginState = useSetRecoilState(loginState);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log('Google Login Clicked');
    setLoginState({ isLoggedIn: true, provider: 'google' });
    navigate('clause');
  };

  const handleKakaoLogin = () => {
    console.log('Kakao Login Clicked');
    setLoginState({ isLoggedIn: true, provider: 'kakao' });
    navigate('clause');
  };

  return (
    <>
      <S.LayOut>
        <S.GoogleLogin onClick={handleGoogleLogin} />
        <S.KakaoLogin onClick={handleKakaoLogin} />
      </S.LayOut>
      <Outlet />
    </>
  );
};

export default EnterLogin;
