import { authInstance } from './instance';
import { PostApiResponse, GetApiResponse } from 'recoil/types/vote';
import axios from 'axios';
import { selectedAgendaPics } from 'recoil/states/vote';
import { useSetRecoilState } from 'recoil';

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
export const fetchNowVote = async (agendaId: number) => {
  const setAgendaPics = useSetRecoilState(selectedAgendaPics);

  try {
    const response = await authInstance().get<GetApiResponse>(
      `/agendas/${agendaId}/vote`,
    );

    const { status, code, message, data } = response.data;
    if (status === 200) {
      const { agendaPhotoId, voteInfoList, voteCount } = data;
      console.log('Updated vote info:', {
        agendaPhotoId,
        voteInfoList,
        voteCount,
      });
      setAgendaPics({
        agendaPhotoId,
        url: '', // URL은 실제로는 API에서 추가로 받아야 할 수 있음
        votesList: voteInfoList,
        voteCount,
      });
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
      throw new Error('투표 현황을 조회하는 중 오류가 발생했습니다.');
    }
  }
};
