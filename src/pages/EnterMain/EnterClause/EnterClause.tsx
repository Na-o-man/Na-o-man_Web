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
  const [alertMessage, setAlertMessage] = useState('약관 동의가 필요해요.');
  const navigate = useNavigate();

  const handleClauseClick = () => {
    if (!checkIcons[1] || !checkIcons[2]) {
      setAlertMessage('필수항목을 체크해주세요!');
      return;
    }

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

  const [checkIcons, setCheckIcons] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  const handleClick = (iconId: number) => {
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
                onClick={() => handleClick(1)}
              />

              <S.IconNeed />
              <div>개인정보 이용 동의</div>
              <S.IconCheck1
                fill={
                  checkIcons[2]
                    ? 'url(#clickedGradient)'
                    : 'url(#paint0_linear_4844_7622)'
                }
                onClick={() => handleClick(2)}
              />

              <S.IconChoice />
              <div>마켓팅 동의</div>
              <S.IconCheck1
                fill={
                  checkIcons[3]
                    ? 'url(#clickedGradient)'
                    : 'url(#paint0_linear_4844_7622)'
                }
                onClick={() => handleClick(3)}
              />
            </S.Text>
            <S.TitleTextDown>
              <div>약관 전체 동의</div>
              <S.IconCheck3 onClick={handleCheckAllClick} />
            </S.TitleTextDown>
            <S.ClauseAccept onClick={handleClauseClick} />
          </S.TitleBox>
        </S.TitleContainer>
        <Outlet />
      </S.Layout>
    </>
  );
};

export default EnterClause;
