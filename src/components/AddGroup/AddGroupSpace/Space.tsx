import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../AddGroupHeadCount/Styles';

const HeadCount = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/addCount/loading');
  };

  return (
    <S.Layout>
      <S.Fly />
      <S.Text>어디에서 찍은 사진인가요?</S.Text>
      <S.InputCountContainer>
        <S.Input />
        <S.InputCounterText>공간을 입력해 주세요.</S.InputCounterText>
      </S.InputCountContainer>
      <S.NextArrow onClick={handleNextClick} />
    </S.Layout>
  );
};

export default HeadCount;
