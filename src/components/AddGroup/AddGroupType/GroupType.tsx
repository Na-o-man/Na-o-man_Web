import React from 'react';
import * as S from './Styles';

const GroupType = () => {
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
      <S.NextArrow />
    </S.Layout>
  );
};

export default GroupType;
