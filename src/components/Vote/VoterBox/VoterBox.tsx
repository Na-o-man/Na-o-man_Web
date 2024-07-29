import React from 'react';
import * as S from './Styles';

const VoterBox = () => {
  return (
    <S.Layout>
      <S.VoterContainer>
        <S.VoterBox />
      </S.VoterContainer>
      <S.VoterContainer>
        <S.VoterBox />
      </S.VoterContainer>
      <S.VoterContainer>
        <S.VoterBox />
      </S.VoterContainer>
    </S.Layout>
  );
};

export default VoterBox;
