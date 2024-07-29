import React, { useState } from 'react';
import Header from 'components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './group1_styles';

import { theme } from 'styles/colors';
import Joingroup2 from './join_group_2';

const Joingroup1: React.FC = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (url.trim() !== '') {
      const id = url;
      navigate(`/shareGroups/join/${id}`);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleNext();
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      <S.Layout>
        <Header backarrow />

        <S.Container>
          <S.ContentBox>
            <S.Textstyeld>
              <S.StyledFly />
              그룹 링크를 입력해주세요.
            </S.Textstyeld>
          </S.ContentBox>
          <S.InputBox>
            <S.StyledInput />
            <S.UrlInput
              placeholder="URL을 입력해주세요."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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
