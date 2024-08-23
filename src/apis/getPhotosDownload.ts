import getApiResponse from 'recoil/types/apis';
import { authInstance } from './instance';
import { AxiosResponse } from 'axios';

interface requestProp {
  shareGroupId: number;
  page?: number;
  size?: number;
}

export const getPhotosAllDownload = async (
  shareGroupId: number,
): Promise<getApiResponse> => {
  try {
    // 쿼리 문자열 생성
    const params = new URLSearchParams();
    params.append('shareGroupId', shareGroupId.toString());

    const res = await authInstance().get(
      `/photos/download/all?${params.toString()}`,
    );
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

export const getPhotosEtcDownload = async (
  shareGroupId: number,
): Promise<getApiResponse> => {
  try {
    // 쿼리 문자열 생성
    const params = new URLSearchParams();
    params.append('shareGroupId', shareGroupId.toString());

    const res = await authInstance().get(
      `/photos/download/etc?${params.toString()}`,
    );
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

export const getPhotosAlbumDownload = async (
  shareGroupId: number,
  profileId: number,
): Promise<AxiosResponse> => {
  try {
    const res = await authInstance().get(
      `/photos/download/album?shareGroupId=${shareGroupId}&profileId=${profileId}`,
    );
    return res;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

export const getPhotosDownload = async (
  shareGroupId: number,
  photoIdList: number[],
): Promise<AxiosResponse> => {
  try {
    const queryParams = photoIdList
      .map((photoId) => `photoIdList=${photoId}`)
      .join('&');
    const res = await authInstance().get(
      `/photos/download?${queryParams}&shareGroupId=${shareGroupId}`,
    );
    return res;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
