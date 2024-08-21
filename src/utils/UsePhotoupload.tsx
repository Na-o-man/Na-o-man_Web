import { useEffect, useState } from 'react';
import axios from 'axios';
import { postPresignedUrl } from 'apis/postPresignedUrl';
import { postPhotoUpload } from 'apis/postPhotoUpload';

interface responseProp {
  photoName: string;
  photoUrl: string;
  preSignedUrl: string;
}

const usePhotoUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [response, setResponse] = useState<responseProp[]>([]);
  const [photoUrl, setPhotoUrl] = useState<string[]>([]);

  const handleCloseClick = (id: number) => {
    const newFiles = files.filter((_, index) => index !== id);
    setFiles(newFiles);
  };

  const handleAddButtonClick = (navigate?: any) => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.click();
    if (navigate) navigate('add');
  };

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const fileList = event?.target.files;
    if (files && fileList) {
      const newFiles = files.concat(Array.from(fileList));
      if (newFiles.length > 2) {
        alert('사진 등록 개수를 초과했어요!');
        return;
      }
      setFiles(newFiles);
      const nameList = newFiles.map((file: File) => file.name);
      try {
        const requestData = { photoNameList: nameList };
        const { data } = await postPresignedUrl(requestData);
        const photoUrls = data.preSignedUrlInfoList.map(
          (item: any) => item.photoUrl,
        );
        setResponse(data.preSignedUrlInfoList);
        setPhotoUrl(photoUrls);
      } catch (error) {
        console.error('Error: ', error);
      }
      // previews 업데이트
      const newPreview = Array.from(fileList).map((file) =>
        URL.createObjectURL(file),
      );
      setPreviews((prev) => prev.concat(newPreview));
    }
  };

  const handleSubmit = async (path: string, navigate: any) => {
    if (files.length < 2) {
      alert('사진을 두 장 이상 선택하세요!');
      return;
    }
    if (!files || response.length === 0) return;
    try {
      const uploadPromises = files.map(async (fileItem, index) => {
        const presignedUrl = response[index].preSignedUrl;
        await axios.put(presignedUrl, fileItem, {
          headers: {
            'Content-Type': fileItem.type,
          },
          withCredentials: true,
        });
      });
      await Promise.all(uploadPromises);

      const requestData = { photoUrlList: photoUrl };
      await postPhotoUpload(requestData);
      console.log(path);
      navigate(`${path}`);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  useEffect(() => {
    if (files) {
      const newPreview = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setPreviews(newPreview);
    }
  }, [files]);

  return {
    files,
    previews,
    handleCloseClick,
    handleAddButtonClick,
    handleChangeFile,
    handleSubmit,
  };
};

export default usePhotoUpload;
