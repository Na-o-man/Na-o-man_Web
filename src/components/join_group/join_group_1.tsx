import React, { useState } from 'react';
import Header from 'components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './group1_styles';

const Joingroup1: React.FC = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handlenNext = () => {
    navigate('/group2');
  }; //해당 url로 이동하기

  return (
    <>
      <S.Layout>
        <Header backarrow />
        <S.Container>
          <S.ContentBox>
            <S.Textstyeld>
              <S.StyledFly />
              그룹 링크를 입력해주세요.
            </S.Textstyeld>
          </S.ContentBox>
          <S.InputBox>
            <S.StyledInput />
          </S.InputBox>
          <S.ButtonBox>
            <S.StyledBtn />
          </S.ButtonBox>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default Joingroup1;
