import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky_dark.png';
import * as I from 'assets/icon';
import { useNavigate } from 'react-router-dom';

const EnterGuide = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<FileList | null>();

  const handleAddButtonClick = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.click();
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event?.target.files;
    setFile(fileList);
  };

  useEffect(() => {
    if (file) {
      navigate('add', { state: { file } });
    }
  }, [file]);
  return (
    <>
      <S.Layout>
        <S.Background src={sky}></S.Background>
        <S.GuideRect />
        <S.GuideTextUp>가이드라인</S.GuideTextUp>
        <S.LineStar />
        <S.GuideContainer>
          <S.GuideBox>
            <S.GuideCaption>정면</S.GuideCaption>
          </S.GuideBox>
          <S.GuideBox>
            <S.GuideCaption>측면</S.GuideCaption>
          </S.GuideBox>
          <S.GuideBox>
            <S.GuideCaption>너무 작게 나온 사진 X</S.GuideCaption>
          </S.GuideBox>
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
        <div onClick={handleAddButtonClick}>
          <input
            type="file"
            id="file"
            onChange={handleChangeFile}
            multiple
            style={{ display: 'none' }}
          />
          <S.PhotoAdd />
          <S.PhotoAddText>사진 추가하기</S.PhotoAddText>
        </div>
        <S.PhotoPlus />
      </S.Layout>
    </>
  );
};

export default EnterGuide;
