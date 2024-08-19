import { authInstance } from './instance';
import axios from 'axios';
//사진 삭제 api

//사진 삭제 응답 인터페이스
export interface deletePhotoResponse {
  status: number;
  code: string;
  message: string;
  data: {
    photoIdList: number[];
  };
}

//DELETE : 사진 삭제
export const deletePhoto = async (
  shareGroupId: number,
  photoIdList: number[],
) => {
  try {
    const response = await authInstance().delete<deletePhotoResponse>(
      `/photos`,
      {
        data: {
          shareGroupId,
          photoIdList,
        },
      },
    );
    const { status, code, message, data } = response.data;

    if (status === 200) {
      console.log('사진 삭제 성공.');
      console.log(`삭제된 사진 ID: ${data.photoIdList}`);
      return data;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('사용자 삭제 중 오류 발생.');
    }
  }
};
