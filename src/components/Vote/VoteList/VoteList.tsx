import React from 'react';
import * as S from './Styles';
import VoteContainer from '../VoteContainer/VoteContainer';

const VoteList = () => {
  return (
    <S.Layout>
      <S.TextLayout>이번 여행을 대표할 엽사는?</S.TextLayout>
      <S.VoteContainer>
        <VoteContainer />
      </S.VoteContainer>
    </S.Layout>
  );
};

export default VoteList;
