import { authInstance } from './instance';
import {
  emailResponse,
  marketingResponse,
  deleteResponse,
} from '../recoil/types/members';
import axios from 'axios';

//회원가입 여부 조회 (GET)
export const fetchRegistration = async (email = 'string') => {
  try {
    const response = await authInstance().get<emailResponse>(
      `/auth/check-registration?email=${email}`,
    );

    const { status, code, message, data } = response.data;

    if (status === 200) {
      return data.isRegistered;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('회원가입 여부 조회 중 오류 발생.');
    }
  }
};

//마케팅 약관 동의 여부 조회 (GET)
export const fetchMarketing = async (memberId = 0) => {
  try {
    const response = await authInstance().get<marketingResponse>(
      `/members/terms/${memberId}`,
    );

    const { status, code, message, data } = response.data;

    if (status === 200) {
      console.log('마켓팅 약관 동의 여부 조회 성공.');
      return data;
    } else if (status === 0) {
      console.log('해당 memberId를 가진 회원이 존재하지 않습니다.');
      return data;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('마켓팅 약관 동의 여부 조회 중 오류 발생.');
    }
  }
};

//회원 탈퇴 (DELETE) (추후 수정)
export const deleteUser = async (memberId: number) => {
  try {
    const response = await authInstance().delete<deleteResponse>(
      `/members/${memberId}`,
    );

    const { status, code, message, data } = response.data;

    if (status === 200) {
      console.log('회원 탈퇴 성공.');
      console.log(`탈퇴한 회원 ID: ${data.memberId}`);
      console.log(`탈퇴 일시: ${data.deleted_at}`);
      return data;
    } else {
      throw new Error(`Error ${code}: ${message}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('사용자 삭제 중 오류 발생.');
    }
  }
};
