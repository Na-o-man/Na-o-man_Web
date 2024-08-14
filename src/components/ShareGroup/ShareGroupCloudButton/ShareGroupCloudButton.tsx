import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { postPresignedUrl } from 'apis/postPresignedUrl';
import axios from 'axios';
import { postPhotoUpload } from 'apis/postPhotoUpload';
import { useParams } from 'react-router-dom';

interface responseProp {
  photoName: string;
  photoUrl: string;
  preSignedUrl: string;
}

const ShareGroupCloudButton: React.FC = () => {
  const [file, setFile] = useState<FileList | null>(null);
  const [response, setResponse] = useState<responseProp[]>([]);
  const [photoUrl, setPhotoUrl] = useState<string[]>();
  const { id } = useParams<{ id: string }>();

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
        photoNameList: nameList,
      };
      try {
        const { data } = await postPresignedUrl(requestData);
        const photoUrls = data.preSignedUrlInfoList.map(
          (item: any) => item.photoUrl,
        );
        setResponse(data.preSignedUrlInfoList);
        setPhotoUrl(photoUrls);
      } catch (error) {
        console.error('Error: ', error);
      }
    }
  };

  const handleUpload = async () => {
    if (!response || !file || !id) return;
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
        shareGroupId: parseInt(id),
        photoUrlList: photoUrl || [],
      };
      const { message } = await postPhotoUpload(requestData);
      alert(`${message}`);
    } catch (error) {
      console.error('업로드 오류:', error);
    }
  };

  useEffect(() => {
    handleUpload();
  }, [response]);

  return (
    <S.Layout>
      <S.ButtonContainer>
        <input
          type="file"
          id="file"
          onChange={handleChangeFile}
          multiple
          style={{ display: 'none' }}
        />
        <S.CloudBtn onClick={handleAddButtonClick} />
        <S.ButtonText>
          이미지
          <br />
          업로드
        </S.ButtonText>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.MiddleCloudBtn />
        <S.MiddleButtonText>다운로드</S.MiddleButtonText>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.CloudBtn />
        <S.ButtonText>
          지난
          <br />
          안건
        </S.ButtonText>
      </S.ButtonContainer>
    </S.Layout>
  );
};

export default ShareGroupCloudButton;
