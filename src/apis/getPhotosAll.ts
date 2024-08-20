import getApiResponse from 'recoil/types/apis';
import { authInstance } from './instance';

interface requestProp {
  shareGroupId: number;
  page?: number;
  size?: number;
}

export const getPhotosAll = async (
  requestData: requestProp,
): Promise<{ status: number; data: any }> => {
  try {
    const { shareGroupId, page, size } = requestData;
    // 쿼리 문자열 생성
    const params = new URLSearchParams();
    params.append('shareGroupId', shareGroupId.toString());
    if (page !== undefined) {
      params.append('page', page.toString());
    }
    if (size !== undefined) {
      params.append('size', size.toString());
    }

    const res = await authInstance().get(`/photos/all?${params.toString()}`);
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

export const getPhotosEtc = async (
  requestData: requestProp,
): Promise<getApiResponse> => {
  try {
    const { shareGroupId, page, size } = requestData;
    // 쿼리 문자열 생성
    const params = new URLSearchParams();
    params.append('shareGroupId', shareGroupId.toString());
    if (page !== undefined) {
      params.append('page', page.toString());
    }
    if (size !== undefined) {
      params.append('size', size.toString());
    }

    const res = await authInstance().get(`/photos/etc?${params.toString()}`);
    const { status, code, message, data } = res.data;
    if (status === 200) {
      console.log(data);
      return res.data;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
