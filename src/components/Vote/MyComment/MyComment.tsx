import React, { useState } from 'react';
import * as S from './Styles';
import { CloseBtnRound } from 'assets/icon';

const MyComment = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.Layout>
      {!isClicked && (
        <S.Component>
          <S.VoterBox onClick={handleClick} />
        </S.Component>
      )}
      {isClicked && (
        <S.Component opening>
          <S.VoterBox />
          <S.TextBox>정말 재미있네요</S.TextBox>
          <S.CloseIconBox onClick={handleClick}>
            <CloseBtnRound />
          </S.CloseIconBox>
        </S.Component>
      )}
    </S.Layout>
  );
};

export default MyComment;
