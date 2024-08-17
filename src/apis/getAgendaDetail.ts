import { authInstance } from './instance';
import axios from 'axios';
import { agendaDetailResponse } from '../recoil/types/vote';

//특정 안건 상세 조회 (GET)
export const fetchAgendaDetail = async (agendaId: number) => {
  try {
    const response = await authInstance().get<agendaDetailResponse>(
      `/agendas/${agendaId}`,
    );

    const { status, code, message, data } = response.data;

    if (status === 200) {
      console.log(data);
      return data;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('특정 안건 상세 조회 중 오류 발생.');
    }
  }
};
