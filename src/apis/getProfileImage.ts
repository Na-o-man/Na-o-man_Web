import { authInstance } from './instance';

interface requestProp {
  shareGroupId: number;
  profileId: number;
  page?: number;
  size?: number;
}

export const getProfileImage = async (
  requestData: requestProp,
): Promise<{ status: number; data: any }> => {
  try {
    const { shareGroupId, profileId, page, size } = requestData;
    // 쿼리 문자열 생성
    const params = new URLSearchParams();
    params.append('shareGroupId', shareGroupId.toString());
    params.append('profileId', profileId.toString());
    if (page !== undefined) {
      params.append('page', page.toString());
    }
    if (size !== undefined) {
      params.append('size', size.toString());
    }

    const res = await authInstance().get(`/photos?${params.toString()}`);
    const { status, code, message, data } = res.data;
    if (status === 200) {
      return { status, data };
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
