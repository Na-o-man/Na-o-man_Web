import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { namesState } from '../../../recoil/states/addgroupState';
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
  const names = useRecoilValue(namesState);

  const handleNextClick = () => {
    // 배열이 비어 있는지 확인
    if (names.length > 0) {
      navigate('/group/add/grouptype');
    } else {
      alert('이름을 입력해주세요');
    }
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
