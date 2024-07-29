import React from 'react';
import EnterMain from '../EnterMain';
import * as S from './Styles';
import { Link, Outlet } from 'react-router-dom';
const EnterLogin = () => {
  return (
    <>
      <S.LayOut>
        <Link to="clause">
          <S.GoogleLogin />
          <S.KakaoLogin />
        </Link>
      </S.LayOut>
      <Outlet />
    </>
  );
};

export default EnterLogin;
