import React from 'react';
import * as S from './Styles';
import sky from '../../assets/background/sky.png';
import TypoBlurred from '../../assets/logo/typo-blurred.png';
import symbol from '../../assets/logo/symbol.png';
import { Link, Outlet } from 'react-router-dom';
const EnterMain = () => {
  return (
    <>
      <S.Layout>
        <Link to="login">
          <S.Symbol src={symbol}></S.Symbol>
          <S.Background src={sky}></S.Background>
          <S.Logo src={TypoBlurred}></S.Logo>
        </Link>
      </S.Layout>
      <Outlet />
    </>
  );
};

export default EnterMain;
