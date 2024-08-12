import { authInstance } from './instance';

export async function deleteShareGroup(shareGroupId: number): Promise<void> {
  try {
    await authInstance().delete(`/shareGroups/${shareGroupId}`);
  } catch (error) {
    console.error('Error deleting share group:', error);
    throw error;
  }
}
