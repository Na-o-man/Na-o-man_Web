import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import MembernameCP from './membernameCP/membernameCP';

const AddGroupMembername = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/addCount/grouptype');
  };

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
      <S.NextArrow onClick={handleNextClick} />
    </S.Layout>
  );
};

export default AddGroupMembername;
