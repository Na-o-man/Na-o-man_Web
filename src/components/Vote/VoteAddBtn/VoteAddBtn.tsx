import { CloudBtnWhite } from 'assets/icon';
import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';

const VoteAddBtn = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate('/vote/create');
  };
  return (
    <S.Layout onClick={handleClickBtn}>
      <CloudBtnWhite />
    </S.Layout>
  );
};

export default VoteAddBtn;
