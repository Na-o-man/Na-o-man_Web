import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky.png';
import typoblurred from '../../../assets/logo/typo-blurred.png';
import symbol from '../../../assets/logo/symbol.png';
import { Outlet } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { accessToken, clauseState } from 'recoil/states/enter';
import { useNavigate } from 'react-router-dom';
import Icon_check3 from '../../../assets/icon/enter/icon_check3.svg';
import Icon_check4 from '../../../assets/icon/enter/icon_check4.svg';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const EnterClause = () => {
  const setLoginState = useSetRecoilState(clauseState);
  const [alertMessage, setAlertMessage] = useState('약관 동의가 필요해요.');
  const navigate = useNavigate();
  const [isAllChecked, setIsAllChecked] = useState(false);
  const setToken = useSetRecoilState(accessToken);
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

  const handleCheckAllClick = () => {
    const newCheckedState = !isAllChecked;
    setCheckIcons({
      1: newCheckedState,
      2: newCheckedState,
      3: newCheckedState,
    });
  };

  useEffect(() => {
    const allChecked = Object.values(checkIcons).every((value) => value);
    setIsAllChecked(allChecked);
  }, [checkIcons]);

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
          setToken(response.data.accessToken);
          setLoginState({ isClauseIn: true });
          navigate('/login/profile');
        });
    }
  };

  return (
    <>
      <S.Layout>
        <S.Logo src={typoblurred}></S.Logo>
        <S.Background src={sky}></S.Background>
        <S.Cloudrect />
        <S.Symbol src={symbol}></S.Symbol>
        <S.TitleBox>
          <S.TitleTextUp>{alertMessage}</S.TitleTextUp>
          <S.Text>
            <S.IconNeed />
            이용 약관 동의
            <S.IconCheck1
              fill={
                checkIcons[1]
                  ? 'url(#clickedGradient)'
                  : 'url(#paint0_linear_4844_7622)'
              }
              onClick={() => handleCheckClick(1)}
            />
            <S.IconNeed />
            개인정보 이용 동의
            <S.IconCheck1
              fill={
                checkIcons[2]
                  ? 'url(#clickedGradient)'
                  : 'url(#paint0_linear_4844_7622)'
              }
              onClick={() => handleCheckClick(2)}
            />
            <S.IconChoice />
            마켓팅 동의
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
            약관 전체 동의
            <S.IconAllCheck
              src={isAllChecked ? Icon_check3 : Icon_check4}
              onClick={handleCheckAllClick}
            />
          </S.TitleTextDown>
          <S.ClauseAccept onClick={handleSubmit} />
        </S.TitleBox>
        <Outlet />
      </S.Layout>
    </>
  );
};

export default EnterClause;
