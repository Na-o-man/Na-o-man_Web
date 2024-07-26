import React from 'react';
import * as S from './Styles';
import MembernameCP from './membernameCP/membernameCP';

const AddGroupMembername = () => {
  return (
    <S.Layout>
      <S.Fly />
      <S.Text>각 멤버의 이름을 입력해주세요.</S.Text>
      <S.InportNameContainer>
        <S.InportNameBox>
          <MembernameCP />
          <MembernameCP />
          <MembernameCP />
        </S.InportNameBox>
      </S.InportNameContainer>
      <S.NextArrow />
    </S.Layout>
  );
};

export default AddGroupMembername;
