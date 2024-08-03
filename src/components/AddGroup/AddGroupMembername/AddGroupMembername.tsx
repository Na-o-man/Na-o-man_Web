import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import MembernameCP from './membernameList/membernameList';

const AddGroupMembername = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/group/add/grouptype');
  };

  return (
    <S.Layout>
      <S.Fly />
      <S.Text>사진을 공유할 사람들의 이름을 추가해주세요.</S.Text>
      <MembernameCP />
      <S.NextArrow onClick={handleNextClick} />
    </S.Layout>
  );
};

export default AddGroupMembername;
