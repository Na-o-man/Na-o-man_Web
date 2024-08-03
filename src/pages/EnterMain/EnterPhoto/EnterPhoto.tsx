import React from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky_dark.png';

const EnterPhoto = () => {
  return (
    <>
      <S.Layout>
        <S.Background src={sky}></S.Background>
        <S.GuideRect />
        <S.GuideTextUp>
          정면, 측면 사진을 각각 한 장씩 추가 해주세요.
        </S.GuideTextUp>
        <S.GuideContainer>
          <S.GuideBox>
            <S.CloseBtn />
          </S.GuideBox>
          <S.GuideBox>
            <S.CloseBtn />
          </S.GuideBox>
        </S.GuideContainer>
        <S.Line />
        <S.PhotoAddBtn />
        <S.PhotoAddText>사진 추가</S.PhotoAddText>
        <S.PhotoPlus />
        <S.SubmitBtn />
        <S.SubmitBtnText>사진 선택 완료</S.SubmitBtnText>
      </S.Layout>
    </>
  );
};

export default EnterPhoto;
