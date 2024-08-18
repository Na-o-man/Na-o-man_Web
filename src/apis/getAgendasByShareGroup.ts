import { authInstance } from './instance'; // authInstance import
import axios from 'axios'; // axios import
import { AgendaListResponse } from '../recoil/types/vote'; // 정의한 타입 import

// 특정 공유 그룹의 안건 목록 조회 (GET)
export const getAgendasByShareGroup = async (shareGroupId: number, page = '0', size = '10') => {
  try {
    // 요청 URL을 생성
    const response = await authInstance().get<AgendaListResponse>(
      `/agendas?shareGroupId=${shareGroupId}&page=${page}&size=${size}`
    );

    const { status, code, message, data } = response.data;

    if (status === 200) { // 상태 코드가 200이면 성공
      console.log(data.agendaDetailInfoList);
      return data;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('특정 공유 그룹의 안건 목록 조회 중 오류 발생.');
    }
  }
};
