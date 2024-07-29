import React from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky_dark.png';
import * as I from 'assets/icon';

const EnterGuide = () => {
  return (
    <>
      <S.Layout>
        <S.Background src={sky}></S.Background>
        <S.GuideRect />
        <S.GuideTextUp>
          <div>가이드라인</div>
        </S.GuideTextUp>
        <S.LineStar />
        <S.GuideContainer>
          <S.GuideBox></S.GuideBox>
          <S.GuideBox></S.GuideBox>
        </S.GuideContainer>
        <S.GuideText>
          <I.O style={{ marginLeft: '-5px' }}></I.O>
          <div style={{ marginLeft: '-10px' }}>
            정면이 보이는 사진으로 선택해 주세요.
          </div>
          <I.X style={{ marginLeft: '-10px' }}></I.X>
          <div style={{ marginLeft: '-10px' }}>
            ~~한 사진은 제외해서 선택해 주세요.
          </div>
        </S.GuideText>
        <S.Line></S.Line>
        <S.PhotoAdd></S.PhotoAdd>
        <S.GuideTextDown>
          <div>위 가이드라인을 준수하는 사진을 n장 입력해 주세요.</div>
        </S.GuideTextDown>
        <S.PhotoAddText>
          <div>사진 추가하기</div>
        </S.PhotoAddText>
        <S.PhotoPlus />
      </S.Layout>
    </>
  );
};

export default EnterGuide;
