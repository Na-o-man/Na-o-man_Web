import React from 'react';
import * as S from './Styles';
import logo from 'assets/design/logo/symbol.png';

const Loading: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <S.LoadingContainer>
      <S.LoadingLogo src={logo} alt="logo" width="60px" height="60px" />
      <S.LoadingText>{text || '사진 분류 중입니다...'}</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default Loading;
