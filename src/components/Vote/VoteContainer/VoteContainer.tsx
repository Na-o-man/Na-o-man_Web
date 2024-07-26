import React from 'react';
import * as S from './Styles';

const VoteContainer = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.PictureBox />
      </S.Container>
      <S.Container>
        <S.WinPictureBox />
        <S.VoterLayout>
          <S.VoterContainer>
            <S.VoterBox />
          </S.VoterContainer>
          <S.VoterContainer>
            <S.VoterBox />
          </S.VoterContainer>
          <S.VoterContainer>
            <S.VoterBox />
          </S.VoterContainer>
        </S.VoterLayout>
      </S.Container>
      <S.Container>
        <S.PictureBox />
        <S.VoterLayout>
          <S.VoterContainer>
            <S.VoterBox />
          </S.VoterContainer>
          <S.VoterContainer>
            <S.VoterBox />
          </S.VoterContainer>
        </S.VoterLayout>
      </S.Container>
      <S.Container>
        <S.PictureBox />
        <S.VoterContainer>
          <S.VoterBox />
        </S.VoterContainer>
      </S.Container>
    </S.Layout>
  );
};

export default VoteContainer;
