import React from 'react';
<<<<<<< Updated upstream
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

const HeadCount = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/addCount/membername');
  };

=======
import * as S from './Styles';

const HeadCount = () => {
>>>>>>> Stashed changes
  return (
    <S.Layout>
      <S.Fly />
      <S.Text>몇 명이서 사진을 공유할 건가요?</S.Text>
      <S.InputCountContainer>
        <S.Input />
        <S.InputCounterText>인원 수를 입력해주세요.</S.InputCounterText>
      </S.InputCountContainer>
<<<<<<< Updated upstream
      <S.NextArrow onClick={handleNextClick} />
=======
      <S.NextArrow />
>>>>>>> Stashed changes
    </S.Layout>
  );
};

export default HeadCount;
