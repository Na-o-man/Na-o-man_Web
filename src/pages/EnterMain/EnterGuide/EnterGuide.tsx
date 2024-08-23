import React from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky_dark.png';
import * as I from 'assets/icon';
import { useNavigate } from 'react-router-dom';
import Face from '../../../assets/design/face.png';
import SideFace from '../../../assets/design/sideface.png';
import SmallFace from '../../../assets/design/smallface.png';

const EnterGuide = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Layout>
        <S.Background src={sky}></S.Background>
        <S.GuideRect />
        <S.GuideTextUp>가이드라인</S.GuideTextUp>
        <S.LineStar />
        <S.GuideContainer>
          <S.GuideBox src={Face} />
          <S.GuideBox src={SideFace} />
          <S.GuideBox src={SmallFace} />
          <S.GuideCaption>측면</S.GuideCaption>
          <S.GuideCaption>정면</S.GuideCaption>
          <S.GuideCaption>너무 작게 나온 사진 X</S.GuideCaption>
        </S.GuideContainer>
        <S.GuideText>
          <I.O />
          정면이 보이는 사진을 한 장 이상 선택해 주세요.
          <I.O />
          측면이 보이는 사진을 한 장 이상 선택해 주세요.
          <I.X />
          너무 작게 나온 사진은 제외하고 선택해 주세요.
        </S.GuideText>
        <S.Line />
        <S.GuideTextDown>
          위 가이드 라인을 준수하는 사진을 <br />
          2장 이상 추가해주세요.
        </S.GuideTextDown>
        <div onClick={() => navigate('add')}>
          <S.PhotoAdd />
          <S.PhotoAddText>사진 추가하기</S.PhotoAddText>
          <S.PhotoPlus />
        </div>
      </S.Layout>
    </>
  );
};

export default EnterGuide;
