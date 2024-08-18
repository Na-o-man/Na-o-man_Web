import React, { useEffect } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky_dark.png';
import { useNavigate } from 'react-router-dom';
import usePhotoUpload from 'utils/UsePhotoupload';

const EnterPhoto = () => {
  const navigate = useNavigate();
  const {
    previews,
    handleCloseClick,
    handleAddButtonClick,
    handleChangeFile,
    handleSubmit,
  } = usePhotoUpload();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 자동으로 handleAddButtonClick 호출
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
          {previews.length < 2 ? <S.GuideBox /> : null}
          {previews.length < 1 ? <S.GuideBox /> : null}
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
        <S.SubmitBtn onClick={() => handleSubmit(navigate)} />
        <S.SubmitBtnText onClick={() => handleSubmit(navigate)}>
          사진 선택 완료
        </S.SubmitBtnText>
      </S.Layout>
    </>
  );
};

export default EnterPhoto;
