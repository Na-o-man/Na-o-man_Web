import getApiResponse from 'recoil/types/apis';
import { authInstance } from './instance';

// eslint-disable-next-line prettier/prettier
export async function getMyShareGroup(): Promise<getApiResponse> {
  try {
    const response = await authInstance().get('/shareGroups/my');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch share group');
    }
  } catch (error) {
    console.error('Error fetching share group:', error);
    throw error;
  }
}

export async function getShareGroupMembers(
  shareGroupId: number,
): Promise<getApiResponse> {
  try {
    const response = await authInstance().get(`/shareGroups/${shareGroupId}`);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error('Failed to fetch share group members');
    }
  } catch (error) {
    console.error('Error fetching share group members:', error);
    throw error;
  }
}
