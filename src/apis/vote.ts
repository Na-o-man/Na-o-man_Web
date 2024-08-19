import { authInstance } from './instance';
import {
  PostApiResponse,
  GetApiResponse,
  agendaPhotosListType,
} from 'recoil/types/vote';
import axios from 'axios';

//requestBody interface
export interface VoteInfo {
  comment: string;
  agendaPhotoId: number;
}

// POST : 안건에 투표하기 api
export const ParticularAgendaVote = async (
  agendaId: number,
  requestBody: VoteInfo[],
): Promise<void> => {
  try {
    const response = await authInstance().post<PostApiResponse>(
      `/agendas/${agendaId}/vote`, // API 엔드포인트
      { voteInfoList: requestBody }, // 요청 본문
    );

    console.log('Particular Agenda Vote Response:', response.data); //서버응답로그

    const { status, code, message, data } = response.data;
    if (status === 200) {
      const { voteIdList } = data;
      console.log('Updated vote id:', voteIdList);
    } else if (status === 401) {
      console.log(`${code}: ${message}`);
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error details:', err.response?.data || err.message);
      throw new Error(`Axios error: ${err.message}`);
    } else {
      console.error('Error details:', err);
      throw new Error('안건에 투표하는 중 오류가 발생했습니다.');
    }
  }
};

// GET : 특정 안건의 투표현황 조회
export const fetchNowVote = async (
  agendaId: number,
): Promise<agendaPhotosListType[]> => {
  try {
    const response = await authInstance().get<GetApiResponse>(
      `/agendas/${agendaId}/vote`,
    );
    const { status, code, message, data } = response.data;

    if (status === 200) {
      const agendaPhotosList: agendaPhotosListType[] = data.map((item) => ({
        agendaPhotoId: item.agendaPhotoId,
        url: '', // URL 정보는 첫 번째 API에서 받아와야 합니다.
        votesList: item.voteInfoList,
        voteCount: item.voteCount,
      }));

      return agendaPhotosList;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Axios error details:',
        error.response?.data || error.message,
      );
      throw new Error(`Axios error: ${error.message}`);
    } else {
      console.error('Error details:', error);
      throw new Error('An error occurred while fetching vote data.');
    }
  }
};

// DELETE : 특정 안건의 투표 취소하기
export const deleteAgendaVote = async (
  agendaId: number,
  voteId: number,
): Promise<void> => {
  try {
    const response = await authInstance().delete(
      `/agendas/${agendaId}/vote/${voteId}`,
    );

    console.log('Delete Vote Response:', response.data); // 서버 응답 로그

    const { status, code, message } = response.data;
    if (status === 200) {
      console.log('Vote successfully deleted.');
    } else if (status === 401) {
      console.log(`${code}: ${message}`);
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error details:', err.response?.data || err.message);
      throw new Error(`Axios error: ${err.message}`);
    } else {
      console.error('Error details:', err);
      throw new Error('투표를 취소하는 중 오류가 발생했습니다.');
    }
  }
};
