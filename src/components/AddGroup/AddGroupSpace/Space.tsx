import React from 'react';
<<<<<<< Updated upstream
import { useNavigate } from 'react-router-dom';
import * as S from '../AddGroupHeadCount/Styles';

const HeadCount = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/addCount/loading');
  };

=======
import * as S from '../AddGroupHeadCount/Styles';

const HeadCount = () => {
>>>>>>> Stashed changes
  return (
    <S.Layout>
      <S.Fly />
      <S.Text>어디에서 찍은 사진인가요?</S.Text>
      <S.InputCountContainer>
        <S.Input />
        <S.InputCounterText>공간을 입력해 주세요.</S.InputCounterText>
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
