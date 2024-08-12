import React, { useEffect } from 'react';
import * as S from './Styles';
import sky from '../../assets/background/sky.png';
import TypoBlurred from '../../assets/logo/typo-blurred.png';
import symbol from '../../assets/logo/symbol.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getMyInfo } from 'apis/getMyInfo';
import { useRecoilState } from 'recoil';
import { UserState } from 'recoil/states/enter';

const EnterMain = () => {
  const [userInfo, setUserInfo] = useRecoilState(UserState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      getMyInfo().then((res) => setUserInfo(res.data));
    }
    navigate('/group');
  }, []);
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
