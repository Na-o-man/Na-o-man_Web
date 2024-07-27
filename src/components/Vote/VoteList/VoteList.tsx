import React from 'react';
import * as S from './Styles';
import VoteContainer from '../VoteContainer/VoteContainer';
import { useNavigate } from 'react-router-dom';

const VoteList = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate('/vote/excute');
  };
  return (
    <S.Layout onClick={handleClickBtn}>
      <S.TextLayout>이번 여행을 대표할 엽사는?</S.TextLayout>
      <S.VoteContainer>
        <VoteContainer />
      </S.VoteContainer>
    </S.Layout>
  );
};

export default VoteList;
