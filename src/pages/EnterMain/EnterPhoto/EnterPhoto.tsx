import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import sky from '../../../assets/background/sky_dark.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { postPresignedUrl } from 'apis/postPresignedUrl';
import axios from 'axios';
import { postPhotoUpload } from 'apis/postPhotoUpload';

interface responseProp {
  photoName: string;
  photoUrl: string;
  preSignedUrl: string;
}

const EnterPhoto = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = Array.from(location.state?.file as File[]);
  const [files, setFiles] = useState<File[]>(state);
  const [previews, setPreviews] = useState<string[]>([]);
  const [response, setResponse] = useState<responseProp[]>([]);
  const [photoUrl, setPhotoUrl] = useState<string[]>([]);

  const handleCloseClick = (id: number) => {
    if (files) {
      const newFiles = files.filter((_: any, index: number) => index !== id);
      setFiles(newFiles);
    }
  };

  const handleAddButtonClick = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.click();
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event?.target.files;
    if (files && fileList) {
      const newFiles = files.concat(Array.from(fileList)); // 기존 파일과 새로운 파일 병합
      setFiles(newFiles);
    }
  };

  const handleSubmit = async () => {
    if (files && files.length < 2) alert('사진을 두 장 이상 선택하세요!');
    else if (files) {
      const nameList = files.map((file: File) => file.name);
      if (nameList) {
        const preSignedData = {
          photoNameList: nameList,
        };
        try {
          const { data } = await postPresignedUrl(preSignedData);
          const photoUrls = data.preSignedUrlInfoList.map(
            (item: any) => item.photoUrl,
          );
          setResponse(data.preSignedUrlInfoList);
          setPhotoUrl(photoUrls);
          const uploadPromises = files.map(async (fileItem, index) => {
            const presignedUrl = response[index]?.preSignedUrl;
            if (presignedUrl) {
              await axios.put(presignedUrl, fileItem, {
                headers: {
                  'Content-Type': fileItem.type, // 파일의 MIME 타입 설정
                },
                withCredentials: true,
              });
            }
          });
          await Promise.all(uploadPromises); // 모든 업로드가 완료될 때까지 대기
          const requestData = {
            photoUrlList: photoUrl || [],
          };
          postPhotoUpload(requestData);
        } catch (error) {
          console.error('Error: ', error);
        }
        navigate('/');
      }
    }
  };

  useEffect(() => {
    if (files) {
      const array = Array.from(files) || [];
      const newPreview = array.map((fl: any) => URL.createObjectURL(fl));
      setPreviews(newPreview);
    }
  }, [files]);

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
        <S.PhotoAddBtn onClick={handleAddButtonClick} />
        <S.PhotoAddText onClick={handleAddButtonClick}>
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
        <S.SubmitBtn onClick={handleSubmit} />
        <S.SubmitBtnText onClick={handleSubmit}>사진 선택 완료</S.SubmitBtnText>
      </S.Layout>
    </>
  );
};

export default EnterPhoto;
