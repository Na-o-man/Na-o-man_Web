import React, { useEffect } from 'react';
import * as S from './Styles';
import sky from '../../assets/background/sky.png';
import TypoBlurred from '../../assets/logo/typo-blurred.png';
import symbol from '../../assets/logo/symbol.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getMyInfo } from 'apis/getMyInfo';
import { useRecoilState } from 'recoil';
import { UserState } from 'recoil/states/enter';
import { getCookie } from 'utils/UseCookies';

const EnterMain = () => {
  const [userInfo, setUserInfo] = useRecoilState(UserState);
  const navigate = useNavigate();
  const cookie = getCookie('access-token');

  useEffect(() => {
    // 사용자 정보가 없다면 가져오기
    if (!userInfo) {
      getMyInfo().then((res) => {
        setUserInfo(res.data);
      });
    }
  }, [userInfo, setUserInfo]);

  // userInfo가 설정된 후에 페이지 이동
  useEffect(() => {
    if (cookie) {
      navigate('/group');
    }
  }, [userInfo, navigate]);

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
