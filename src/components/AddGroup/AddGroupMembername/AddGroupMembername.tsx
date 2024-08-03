import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import MembernameList from './membernameList/membernameList';

function MemberNameHead() {
  return (
    <S.headingLayout>
      <S.Fly />
      <S.Text>사진을 공유할 사람들의 이름을 추가해주세요.</S.Text>
    </S.headingLayout>
  );
}

function MemberNameContent() {
  return (
    <S.ListLayout>
      <MembernameList />
    </S.ListLayout>
  );
}

const AddGroupMembername = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/group/add/grouptype');
  };

  return (
    <S.MemberNameLayout>
      <MemberNameHead />
      <MemberNameContent />
      <S.NextArrow onClick={handleNextClick} />
    </S.MemberNameLayout>
  );
};

export default AddGroupMembername;
