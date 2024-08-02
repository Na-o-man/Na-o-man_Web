import React from 'react';
import * as S from './Styles';
<<<<<<< Updated upstream
import { useNavigate } from 'react-router-dom';

const GroupType = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/addCount/space');
  };

=======

const GroupType = () => {
>>>>>>> Stashed changes
  return (
    <S.Layout>
      <S.Fly />
      <S.Text>모임의 성격을 알려주세요.</S.Text>
      <S.SelectText>(중복 선택 가능)</S.SelectText>
      <S.TypeContainer top="-15%" left="-25%">
        <S.GroupBtn />
        <S.InputTypeText>친구</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-15%" left="0%">
        <S.GroupBtn />
        <S.InputTypeText>연인</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-15%" left="25%">
        <S.GroupBtn />
        <S.InputTypeText>여행</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-8%" left="-25%">
        <S.GroupBtn />
        <S.InputTypeText>가족</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-8%" left="0%">
        <S.GroupBtn />
        <S.InputTypeText>정기 모임</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-8%" left="25%">
        <S.GroupBtn />
        <S.InputTypeText>동아리</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-1%" left="-25%">
        <S.GroupBtn />
        <S.InputTypeText>행사</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-1%" left="0%">
        <S.GroupBtn />
        <S.InputTypeText>나들이</S.InputTypeText>
      </S.TypeContainer>
      <S.TypeContainer top="-1%" left="25%">
        <S.GroupBtn />
        <S.InputTypeText>스냅 사진</S.InputTypeText>
      </S.TypeContainer>
      <S.InputTypeContainer>
        <S.InputGroupType />
        <S.InputGroupTypeText>직접 입력</S.InputGroupTypeText>
      </S.InputTypeContainer>
<<<<<<< Updated upstream
      <S.NextArrow onClick={handleNextClick} />
=======
      <S.NextArrow />
>>>>>>> Stashed changes
    </S.Layout>
  );
};

export default GroupType;
