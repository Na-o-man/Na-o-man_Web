import { authInstance } from './instance';

export const getMyInfo = async () => {
  try {
    const { data } = await authInstance().get(`/members/my`);
    return data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
