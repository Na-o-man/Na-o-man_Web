import { PostApiResponse } from 'recoil/types/notice';
import { authInstance } from './instance';
interface requestProp {
  shareGroupId: number;
  photoUrlList: string[];
}

export const postPhotoUpload = async (
  requestData: requestProp,
): Promise<{ data: any }> => {
  try {
    const res = await authInstance().post<PostApiResponse>(
      `/photos/upload`,
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
