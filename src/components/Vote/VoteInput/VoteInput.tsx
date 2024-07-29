import React, { useState } from 'react';
import * as S from './Styles';
import { BoxSmall } from 'assets/icon';
import VoteAddBtn from '../VoteAddBtn/VoteAddBtn';
import { useNavigate } from 'react-router-dom';

const VoteInput = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleClickBtn = () => {
    navigate('/vote/excute', { state: { title } });
  };
  return (
    <S.Layout>
      <S.TitleContainer>안건</S.TitleContainer>
      <S.InputContainer
        placeholder="안건을 입력해주세요."
        onChange={handleChange}
      />
      <BoxSmall style={{ position: 'absolute', width: '85%' }} />
      <VoteAddBtn onClick={() => handleClickBtn()} />
    </S.Layout>
  );
};

export default VoteInput;
