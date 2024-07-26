import React from 'react';
import * as S from './Styles';
import { BoxSmall } from 'assets/icon';

const VoteInput = () => {
  return (
    <S.Layout>
      <S.TitleContainer>안건</S.TitleContainer>
      <S.InputContainer placeholder="안건을 입력해주세요." />
      <BoxSmall style={{ position: 'absolute', width: '85%' }} />
    </S.Layout>
  );
};

export default VoteInput;
