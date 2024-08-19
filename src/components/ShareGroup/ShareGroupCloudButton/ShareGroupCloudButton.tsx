import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { postPresignedUrl } from 'apis/postPresignedUrl';
import { getAgendasByShareGroup } from 'apis/getAgendasByShareGroup';
import axios from 'axios';
import { postPhotoUpload } from 'apis/postPhotoUpload';
import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const currentIndex = useRecoilValue(folderCurrentIndex);
  const items = useRecoilValue(shareGroupMemberListState);
  const navigate = useNavigate();
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

  const handlePastAgendaClick = async () => {
    const shareGroupId: number = parseInt(id || '0'); // 현재 사용 중인 shareGroupId

    if (isNaN(shareGroupId) || shareGroupId <= 0) {
      console.error('유효하지 않은 공유 그룹 ID입니다.');
      return;
    }

    try {
      const { agendaDetailInfoList } = await getAgendasByShareGroup(shareGroupId);

      if (agendaDetailInfoList && agendaDetailInfoList.length > 0) {
        // 안건 데이터가 있으면 vote/list 경로로 이동
        navigate('/vote/list', { state: { agendaDetailInfoList } });
      } else {
        // 안건 데이터가 없으면 vote/:id 경로로 이동
        navigate(`/vote/${id}`);
      }
    } catch (error) {
      console.error('지난 안건 조회 중 오류 발생:', error);
      alert('지난 안건 조회 중 오류가 발생했습니다.');
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
      <S.ButtonContainer onClick={handlePastAgendaClick}>
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
