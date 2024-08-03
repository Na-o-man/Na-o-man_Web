import { useState, React } from 'react';
import * as S from './Styles';
import MembernameCreate from './membernameCreate';

const membernameList = () => {
  return (
    <S.nameLayout>
      <S.nameList>
        <S.nameContainer>
          <S.nameBox>

          </S.nameBox>
          <S.nameButton type={'button'}>ⓧ</S.nameButton>
        </S.nameContainer>
      </S.nameList>
    </S.nameLayout>
  );
};

export default membernameList;
