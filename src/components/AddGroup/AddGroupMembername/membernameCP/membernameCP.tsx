import React from 'react';
import * as S from './Styles';

const membernameCP = () => {
  return (
    <S.Layout>
      <S.Inputnamecontainer>
        <S.InputProfile />
        <S.InputnameBox>
          <S.InputName />
          <S.InputNameText>이름</S.InputNameText>
        </S.InputnameBox>
        <S.UnderBar />
      </S.Inputnamecontainer>
    </S.Layout>
  );
};

export default membernameCP;
