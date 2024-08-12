import { PostApiResponse } from 'recoil/types/notice';
import { authInstance } from './instance';

interface requestProp {
  shareGroupId: number;
  photoNameList: string[];
}

export const postPresignedUrl = async (
  requestData: requestProp,
): Promise<{ data: any }> => {
  try {
    const res = await authInstance().post<PostApiResponse>(
      `/photos/preSignedUrl`,
      requestData,
    );
    const { status, code, message, data } = res.data;
    if (status === 200) {
      return { data };
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
