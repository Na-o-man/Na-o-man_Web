import React from 'react';
import * as S from './Styles';
import { BoxSmall, Fly } from 'assets/icon';

export interface props {
  clicked?: boolean;
}

const VoteTitle = ({ clicked }: props) => {
  return (
    <S.Layout>
      <Fly
        style={{
          transform: 'rotate(-100deg)',
          position: 'absolute',
          left: '10%',
          width: '5%',
        }}
      />
      <S.TextContainer clicked={clicked}>
        이번 여행을 대표할 엽사는?
      </S.TextContainer>
      <BoxSmall style={{ position: 'absolute', width: '90%' }} />
    </S.Layout>
  );
};

export default VoteTitle;
