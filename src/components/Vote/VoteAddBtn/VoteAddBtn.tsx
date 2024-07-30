import { CloudBtnWhite } from 'assets/icon';
import React from 'react';
import * as S from './Styles';

interface props {
  onClick: () => void;
}

const VoteAddBtn = ({ onClick }: props) => {
  return (
    <S.Layout onClick={onClick}>
      <CloudBtnWhite />
    </S.Layout>
  );
};

export default VoteAddBtn;
