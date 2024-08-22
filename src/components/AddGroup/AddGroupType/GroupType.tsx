import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import MemberTypeList from './MemberTypeList/MemberTypeList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { newtypeState, typeState } from '../../../recoil/states/addgroupState';

function MemberTypeHead() {
  return (
    <S.headingLayout>
      <S.Fly />
      <S.Text>모임의 성격을 알려주세요.</S.Text>
      <S.SelectText>(중복 선택 가능)</S.SelectText>
    </S.headingLayout>
  );
}

function MemberTypeContent() {
  return <MemberTypeList />;
}

const GroupType = () => {
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useRecoilState(typeState); // 선택된 타입 상태
  const newType = useRecoilValue(newtypeState); // 새로 입력된 타입 상태

  const handleNextClick = () => {
    const trimmedNewType = newType ? newType.trim() : '';

    if (selectedTypes.length > 0 || trimmedNewType !== '') {
      const allTypes = [...selectedTypes];

      // 새로 입력된 타입이 있는 경우 배열에 추가
      if (trimmedNewType !== '' && !selectedTypes.includes(trimmedNewType)) {
        allTypes.push(trimmedNewType);
        setSelectedTypes(allTypes);
      }

      navigate('/group/add/space');
    } else {
      alert('성격을 선택하거나 입력해주세요');
    }
  };
  return (
    <S.MemberTypeLayout>
      <MemberTypeHead />
      <MemberTypeContent />
      <S.NextArrow onClick={handleNextClick} /> {/* 다음 버튼 클릭 시 처리 */}
    </S.MemberTypeLayout>
  );
};

export default GroupType;
