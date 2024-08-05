import { authInstance } from './instance';
import { ApiResponse, PostApiResponse } from '../recoil/types/notice';
import axios from 'axios';

// GET : 알림목록 조회
export const fetchNotices = async (page = '0', size = '10') => {
  try {
    const response = await authInstance().get<ApiResponse>(
      `/notifications/my?page=${page}&size=${size}`,
    );

    const { status, code, message, data } = response.data;

    if (status === 200) {
      return data.notificationInfoList;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('알림을 가져오는 중 오류가 발생했습니다.');
    }
  }
};
// GET : 읽지 않은 알림 유무
export const fetchNoticesNotRead = async (): Promise<boolean> => {
  try {
    const response = await authInstance().get<ApiResponse>(
      `/notifications/unread`,
    );

    const { status, code, message, data } = response.data;

    if (status === 200) {
      return data.isUnread ?? false;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('읽지 않은 알림의 존재 여부를 가져오는 중 오류 발생');
    }
  }
};

// POST : 알림 읽음
export const markNotificationAsRead = async (id: string): Promise<void> => {
  try {
    const response = await authInstance().post<PostApiResponse>(
      '/notifications/acknowledgements',
      { notificationId: id },
    );

    console.log('Mark Notification As Read Response:', response.data); // 서버 응답 로그

    const { status, code, message, data } = response.data;
    if (status === 200) {
      const { acknowledgedCount } = data;
      console.log('Updated notification count:', acknowledgedCount);
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error details:', err.response?.data || err.message);
      throw new Error(`Axios error: ${err.message}`);
    } else {
      console.error('Error details:', err);
      throw new Error('알림을 읽음으로 표시하는 중 오류가 발생했습니다.');
    }
  }
};
