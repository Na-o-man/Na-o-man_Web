import React, { useState } from 'react';
import Header from 'components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './group1_styles';
import axios from 'axios';
import { getCookie } from 'utils/UseCookies';
const API_URL = 'https://api.naoman.site/shareGroups';

const Joingroup1: React.FC = () => {
  const [inviteUrl, setInviteUrl] = useState('');

  const navigate = useNavigate();

  const handleNext = async () => {
    const trimmedUrl = inviteUrl.trim();

    if (trimmedUrl !== '') {
      // 초대 url에서 뒷 부분 추출
      const parts = trimmedUrl.split('/');
      const inviteCode = parts.pop();
      const token =
        getCookie('access-token') || process.env.REACT_APP_REFRESH_TOKEN;
      //api요청할 때 inviteCode를 쿼리 파라미터로 포함
      if (inviteCode) {
        try {
          const response = await axios.get(
            `${API_URL}?inviteCode=${inviteCode}`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            },
          );

          const groupData = response.data.data;

          console.log(response.data); // 응답 데이터 로그
          // 성공적인 참여 후 로직 추가 (예: 그룹 페이지로 이동)
          navigate(`/Group/join/${inviteCode}`, { state: groupData }); // 그룹 페이지로 이동
        } catch (error) {
          console.error('그룹 참여 중 오류 발생:', error);
          alert('그룹 참여에 실패했습니다. 다시 시도해 주세요.');
        }
      } else {
        alert('유효하지 않은 URL입니다.');
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <>
      <S.Layout>
        <Header backarrow />
        <S.Container>
          <S.Textstyeld>
            <S.StyledFly />
            그룹 링크를 입력해주세요.
          </S.Textstyeld>
          <S.InputBox>
            <S.StyledInput />
            <S.UrlInput
              placeholder="URL을 입력해주세요."
              value={inviteUrl}
              onChange={(e) => setInviteUrl(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.InputBox>
          <S.ButtonBox>
            <S.StyledBtn />
            <S.NextButton onClick={handleNext}>→</S.NextButton>
          </S.ButtonBox>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default Joingroup1;
