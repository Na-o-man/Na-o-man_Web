import React, { useState } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky.png';
import typoblurred from '../../../assets/logo/typo-blurred.png';
import symbol from '../../../assets/logo/symbol.png';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { clauseState } from 'recoil/states/enter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const EnterClause = () => {
  const setLoginState = useSetRecoilState(clauseState);
  const [alertMessage, setAlertMessage] = useState('약관 동의가 필요해요.');
  const navigate = useNavigate();
  const [checkIcons, setCheckIcons] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });
  const handleCheckClick = (iconId: number) => {
    setCheckIcons((prev) => ({
      ...prev,
      [iconId]: !prev[iconId],
    }));
  };
  //약관 전체 동의
  const handleCheckAllClick = () => {
    const allChecked = Object.values(checkIcons).every((value) => value);
    setCheckIcons({
      1: !allChecked,
      2: !allChecked,
      3: !allChecked,
    });
  };
  const handleSubmit = () => {
    if (!checkIcons[1] || !checkIcons[2]) {
      setAlertMessage('필수항목을 체크해주세요!');
      return;
    } else {
      const postUrl = `${SERVER_URL}/auth/signup/web`;
      const postdata = JSON.stringify({
        marketingAgreed: checkIcons[3],
      });
      axios
        .post(postUrl, postdata, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          console.log(response.data);
          setLoginState({ isClauseIn: true });
          navigate('profile');
        });
    }
  };

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
              <div>{alertMessage}</div>
            </S.TitleTextUp>
            <S.Text>
              <S.IconNeed />
              <div>이용 약관 동의</div>
              <S.IconCheck1
                fill={
                  checkIcons[1]
                    ? 'url(#clickedGradient)'
                    : 'url(#paint0_linear_4844_7622)'
                }
                onClick={() => handleCheckClick(1)}
              />

              <S.IconNeed />
              <div>개인정보 이용 동의</div>
              <S.IconCheck1
                fill={
                  checkIcons[2]
                    ? 'url(#clickedGradient)'
                    : 'url(#paint0_linear_4844_7622)'
                }
                onClick={() => handleCheckClick(2)}
              />

              <S.IconChoice />
              <div>마켓팅 동의</div>
              <S.IconCheck1
                fill={
                  checkIcons[3]
                    ? 'url(#clickedGradient)'
                    : 'url(#paint0_linear_4844_7622)'
                }
                onClick={() => handleCheckClick(3)}
              />
            </S.Text>
            <S.TitleTextDown>
              <div>약관 전체 동의</div>
              <S.IconCheck3 onClick={handleCheckAllClick} />
            </S.TitleTextDown>
            <S.ClauseAccept onClick={handleSubmit} />
          </S.TitleBox>
        </S.TitleContainer>
        <Outlet />
      </S.Layout>
    </>
  );
};

export default EnterClause;
