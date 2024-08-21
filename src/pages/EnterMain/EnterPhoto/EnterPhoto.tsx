import React, { useEffect } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky_dark.png';
import { useNavigate } from 'react-router-dom';
import usePhotoUpload from 'utils/UsePhotoupload';
import { useRecoilValue } from 'recoil';
import { redirectPath } from 'recoil/states/enter';
import SideFace from '../../../assets/design/sideface.png';
import Face from '../../../assets/design/face.png';

const EnterPhoto = () => {
  const navigate = useNavigate();
  const path = useRecoilValue(redirectPath);
  const {
    previews,
    handleCloseClick,
    handleAddButtonClick,
    handleChangeFile,
    handleSubmit,
  } = usePhotoUpload();

  console.log('프리뷰 출력');
  console.log(previews);

  useEffect(() => {
    handleAddButtonClick();
  }, []);

  return (
    <>
      <S.Layout>
        <S.Background src={sky}></S.Background>
        <S.GuideRect />
        <S.GuideTextUp>
          정면, 측면 사진을 각각 한 장씩 추가 해주세요.
        </S.GuideTextUp>
        <S.Line />
        <S.GuideContainer>
          {previews.map((p, idx) => (
            <S.GuideBox key={idx}>
              <S.GuideImg src={p} />
              <S.CloseBtn onClick={() => handleCloseClick(idx)} />
            </S.GuideBox>
          ))}
          {previews.length === 0 ? (
            <>
              <S.GuideBox>
                <S.GuideImg src={Face} />
              </S.GuideBox>
              <S.GuideBox>
                <S.GuideImg src={SideFace} />
              </S.GuideBox>
            </>
          ) : null}
          {previews.length === 1 ? (
            <S.GuideBox>
              <S.GuideImg src={SideFace} />
            </S.GuideBox>
          ) : null}
        </S.GuideContainer>
        <S.PhotoAddBtn onClick={() => handleAddButtonClick()} />
        <S.PhotoAddText onClick={() => handleAddButtonClick()}>
          <input
            type="file"
            id="file"
            onChange={handleChangeFile}
            multiple
            style={{ display: 'none' }}
          />
          사진 추가
        </S.PhotoAddText>
        <S.PhotoPlus />
        <S.SubmitBtn onClick={() => handleSubmit(path, navigate)} />
        <S.SubmitBtnText onClick={() => handleSubmit(path, navigate)}>
          사진 선택 완료
        </S.SubmitBtnText>
      </S.Layout>
    </>
  );
};

export default EnterPhoto;
