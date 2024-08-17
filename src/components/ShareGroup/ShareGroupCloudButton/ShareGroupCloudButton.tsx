import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { postPresignedUrl } from 'apis/postPresignedUrl';
import axios from 'axios';
import { postPhotoUpload } from 'apis/postPhotoUpload';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  folderCurrentIndex,
  shareGroupMemberListState,
} from 'recoil/states/share_group';
import { getDownloadPhotosAll } from 'apis/getDownloadPhotos';
import imageZipDownloader from 'utils/ImageZipDownloader';

interface responseProp {
  photoName: string;
  photoUrl: string;
  preSignedUrl: string;
}

const ShareGroupCloudButton: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentIndex = useRecoilValue(folderCurrentIndex);
  const items = useRecoilValue(shareGroupMemberListState);

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

  const handleDownload = async (): Promise<void> => {
    const shareGroupId: number = parseInt(id || '0');
    const profileId: number = items[currentIndex].profileId;
    if (shareGroupId === 0) return;
    try {
      const response = await getDownloadPhotosAll(shareGroupId, profileId);
      console.log(response.data.data);
      if (response.status === 200) {
        await imageZipDownloader({
          imageUrls: response.data.data.photoDownloadUrlList,
        });
      }
    } catch (error) {
      console.log(error);
      alert('다운로드 중 오류가 발생했습니다.');
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
      <S.ButtonContainer onClick={handleDownload}>
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
