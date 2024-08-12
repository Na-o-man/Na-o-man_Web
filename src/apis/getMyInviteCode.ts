import { authInstance } from './instance';

interface IInviteCode {
  inviteCode: string;
  inviteUrl: string;
}

export async function getMyInviteCode({
  shareGroupId,
}: {
  shareGroupId: number;
}): Promise<IInviteCode> {
  try {
    const response = await authInstance().get(
      `/shareGroups/${shareGroupId}/invite`,
    );
    if (response.status === 200) {
      return {
        inviteCode: response.data.inviteCode,
        inviteUrl: response.data.inviteUrl,
      };
    } else {
      throw new Error('Failed to fetch invite code');
    }
  } catch (error) {
    console.error('Error fetching invite code:', error);
    throw error;
  }
}
