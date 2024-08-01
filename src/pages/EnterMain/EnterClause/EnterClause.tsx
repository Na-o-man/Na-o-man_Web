import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky.png';
import typoblurred from '../../../assets/logo/typo-blurred.png';
import symbol from '../../../assets/logo/symbol.png';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { clauseState } from 'recoil/states/enter';
import { useNavigate } from 'react-router-dom';

const EnterClause = () => {
  const [cookies, setCookies] = useState([]);
  const setLoginState = useSetRecoilState(clauseState);
  const navigate = useNavigate();
  const hadleClauseClick = () => {
    console.log('Clause accepted');
    setLoginState({ isClauseIn: true });
    navigate('profile');
  };

  useEffect(() => {
    // Express API 호출
    fetch('http://localhost:3001/api/get-cookies')
      .then((response) => response.json())
      .then((data) => {
        setCookies(data.cookies); // 가져온 쿠키를 상태에 저장
      })
      .catch((error) => console.error('Error fetching cookies:', error));

    console.log(cookies);
  }, []);

  return (
    <>
      <S.Layout>
        <S.Logo src={typoblurred}></S.Logo>
        <S.Background src={sky}></S.Background>
        <S.TitleContainer>
          <S.Cloudrect />
          <S.Symbol src={symbol}></S.Symbol>
          <S.TitleBox>
            <S.TitleTextUp>
              <div>약관 동의가 필요해요.</div>
            </S.TitleTextUp>
            <S.Text>
              <S.IconNeed />
              <div>이용 약관 동의</div>
              <S.IconCheck1 />

              <S.IconNeed />
              <div>개인정보 이용 동의</div>
              <S.IconCheck1 />

              <S.IconChoice />
              <div>마켓팅 동의</div>
              <S.IconCheck1 />
            </S.Text>
            <S.TitleTextDown>
              <div>약관 전체 동의</div>
              <S.IconCheck3 />
            </S.TitleTextDown>
            <S.ClauseAccept onClick={hadleClauseClick} />
          </S.TitleBox>
        </S.TitleContainer>
        <Outlet />
      </S.Layout>
    </>
  );
};

export default EnterClause;
