/* eslint-disable prettier/prettier */
import React from 'react';
import * as S from './Styles';
import { useRecoilState } from 'recoil';
import { newtypeState, typeState } from '../../state';

const MemberTypeCreate = () => {
  const [newType, setNewType] = useRecoilState(newtypeState); // Recoil 상태를 사용하여 newType을 관리합니다.

  return (
    <S.TypeCreateLayout>
      <S.TypeInput />
      <S.inputType
        type="text"
        placeholder="직접입력"
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
      />
    </S.TypeCreateLayout>
  );
};

const MemberTypeList: React.FC = () => {
  const initialTypes = [
    '친구',
    '연인',
    '여행',
    '가족',
    '정기 모임',
    '동아리',
    '행사',
    '나들이',
    '스냅 사진',
  ];

  const [selectedTypes, setSelectedTypes] = useRecoilState(typeState); // 선택된 타입 상태 추가

  const handleTypeClick = (Type: string) => {
    setSelectedTypes(
      (prevSelectedTypes) =>
        prevSelectedTypes.includes(Type)
          ? prevSelectedTypes.filter((type) => type !== Type) // 이미 선택된 경우 제거
          : [...prevSelectedTypes, Type], // 선택되지 않은 경우 추가
    );
  };

  return (
    <S.TypeLayout>
      <S.TypeList>
        {initialTypes.map((Type, index) => (
          <S.TypeContainer key={index} onClick={() => handleTypeClick(Type)}>
            <S.NowImportType />
            <S.Type
              style={{
                color: selectedTypes.includes(Type) ? 'skyblue' : 'white',
              }}
            >
              {Type}
            </S.Type>
          </S.TypeContainer>
        ))}
      </S.TypeList>
      <MemberTypeCreate />
    </S.TypeLayout>
  );
};

export default MemberTypeList;
