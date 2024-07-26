import React from 'react';
import * as S from './Styles';
import { BoxSmall, Fly } from 'assets/icon';

const VoteTitle = () => {
  return (
    <S.Layout>
      <Fly
        style={{
          transform: 'rotate(-135deg)',
        }}
      />
      <S.TextContainer>이번 여행을 대표할 엽사는?</S.TextContainer>
      <BoxSmall style={{ position: 'absolute', width: '85%' }} />
    </S.Layout>
  );
};

export default VoteTitle;
