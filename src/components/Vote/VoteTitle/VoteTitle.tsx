import React from 'react';
import * as S from './Styles';
import { BoxSmall, Fly } from 'assets/icon';

export interface props {
  clicked?: boolean;
  title: string;
}

const VoteTitle = ({ clicked, title }: props) => {
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
      <S.TextContainer clicked={clicked}>{title}</S.TextContainer>
      <BoxSmall style={{ position: 'absolute', width: '100%' }} />
    </S.Layout>
  );
};

export default VoteTitle;
