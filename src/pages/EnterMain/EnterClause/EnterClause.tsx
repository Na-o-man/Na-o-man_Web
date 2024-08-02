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

  function getCookieValue() {
    const name = 'temp-member-info=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    console.log(cookiesArray);
    for (let i = 0; i < cookiesArray.length; i++) {
      const cookie = cookiesArray[i].trim();
      if (cookie.startsWith(name)) {
        console.log(cookie.substring(name.length));
        return cookie.substring(name.length); // 쿠키 값 반환
      }
    }

    return null; // 쿠키가 없을 경우 null 반환
  }

  const tempMemberInfo = getCookieValue();

  // POST 요청을 보낼 URL
  const postUrl = 'https://naoman.site/auth/signup/web';

  // POST 요청에 포함할 데이터

  const postdata = JSON.stringify({
    marketingAgreed: true,
  });

  // POST 요청 보내기 axios
  fetch(postUrl, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `${tempMemberInfo}`,
    },
    body: postdata,
  })
    .then((response) => response.json())
    .then((data) => {
      // 응답 데이터 처리
      if (data.status === 200) {
        const { memberId, accessToken, refreshToken } = data.data;
        console.log('Member ID:', memberId);
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
        //로컬에 저장
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('memberId', memberId);
        setLoginState({ isClauseIn: true });
        navigate('profile');
      } else {
        console.error('Error:', data.message);
      }
    })
    .catch((error) => {
      console.error('Error1', error);
    });

  const handleClauseClick = () => {
    if (!checkIcons[1] || !checkIcons[2]) {
      setAlertMessage('필수항목을 체크해주세요!');
      return;
    }

    console.log('Clause accepted');
    setLoginState({ isClauseIn: true });
    navigate('profile');
  };

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
