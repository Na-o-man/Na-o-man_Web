import { authInstance } from './instance';

export async function deleteShareGroup(shareGroupId: number): Promise<void> {
  try {
    const response = await authInstance().delete(
      `/shareGroups/${shareGroupId}`,
    );
    if (response.status === 200) {
      console.log('Share group deleted successfully');
    } else {
      throw new Error('Failed to delete share group');
    }
  } catch (error) {
    console.error('Error deleting share group:', error);
    throw error;
  }
}
