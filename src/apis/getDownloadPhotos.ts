// photo 관련 다운로드 API는 여기에 작성 바람

import { AxiosResponse } from 'axios';
import { authInstance } from './instance';

export const getDownloadPhotosAll = async (
  shareGroupId: number,
  profileId: number,
): Promise<AxiosResponse> => {
  try {
    const res = await authInstance().get(
      `/photos/download/all?shareGroupId=${shareGroupId}&profileId=${profileId}`,
    );
    return res;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
