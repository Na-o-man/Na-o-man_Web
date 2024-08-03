import { useState } from 'react';
import * as S from './Styles';

function MembernameCreate() {
  return (
    <S.nameCreatelayout>
      <S.MemberInput />
      <S.inputname type="text" placeholder="이름"></S.inputname>
      <S.inputplus />
    </S.nameCreatelayout>
  );
}

const membernameList = () => {
  return (
    <S.nameLayout>
      <S.nameFolder />
      <S.nameList>
        <S.nameContainer>
          <S.NowImportName />
          <S.name>황지원</S.name>
          <S.nameButton>ⓧ</S.nameButton>
        </S.nameContainer>
        <S.nameContainer>
          <S.NowImportName />
          <S.name>박을순</S.name>
          <S.nameButton>ⓧ</S.nameButton>
        </S.nameContainer>
        <S.nameContainer>
          <S.NowImportName />
          <S.name>김똘똘</S.name>
        </S.nameContainer>
      </S.nameList>
      <MembernameCreate />
    </S.nameLayout>
  );
};

export default membernameList;
