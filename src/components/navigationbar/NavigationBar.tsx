import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { AddBtn, HomeBtn, NotificationBtn } from 'assets/icon';
import { postPresignedUrl } from 'apis/postPresignedUrl';
import axios from 'axios';
import { postPhotoUpload } from 'apis/postPhotoUpload';

interface responseProp {
  photoName: string;
  photoUrl: string;
  preSignedUrl: string;
}

const NavigationBar = () => {
  const [file, setFile] = useState<FileList | null>(null);
  const [response, setResponse] = useState<responseProp[]>([]);
  const [photoUrl, setPhotoUrl] = useState<string[]>();

  const handleAddButtonClick = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.click();
  };

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const fileList = event?.target.files;
    const nameList = fileList
      ? Array.from(fileList).map((file: File) => file.name)
      : undefined;
    setFile(fileList);
    if (nameList) {
      const requestData = {
        shareGroupId: 2,
        photoNameList: nameList,
      };
      try {
        const { data } = await postPresignedUrl(requestData);
        setResponse(data.preSignedUrlInfoList);
        setPhotoUrl(data.photoUrl);
      } catch (error) {
        console.error('Error: ', error);
      }
    }
  };

  const handleUpload = async () => {
    if (!response || !file) return;
    try {
      const uploadPromises = Array.from(file).map(async (fileItem, index) => {
        const presignedUrl = response[index].preSignedUrl;
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
        shareGroupId: 2,
        photoUrlList: photoUrl || [],
      };
      postPhotoUpload(requestData);
    } catch (error) {
      console.error('업로드 오류:', error);
    }
  };

  useEffect(() => {
    handleUpload();
  }, [response]);

  return (
    <S.Layout>
      <S.IconLayout>
        <HomeBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
        <S.AddButtonBox>
          <S.FileInput
            type="file"
            id="file"
            onChange={handleChangeFile}
            multiple
            style={{ display: 'none' }}
          ></S.FileInput>
          <AddBtn
            style={{ width: '1.4rem', cursor: 'pointer' }}
            onClick={handleAddButtonClick}
          />
        </S.AddButtonBox>
        <NotificationBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
      </S.IconLayout>
    </S.Layout>
  );
};

export default NavigationBar;
