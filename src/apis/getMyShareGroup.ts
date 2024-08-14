import { authInstance } from './instance';

interface IShareGroupInfo {
  shareGroupId: number;
  name: string;
  image: string;
  memberCount: number;
  inviteUrl: string;
  createdAt: string;
}

interface profile {
  profileId: number; // 프로필 id
  name: string; // 프로필 이름
  image: string; // URL 형식
  memberId: number; // 해당 프로필로 참여한 회원의 id. 생략할지 고민중
}

interface IShareGroupMember {
  shareGroupId: number;
  name: string;
  image: string;
  memberCount: number;
  inviteUrl: string;
  createdAt: string;
  profileInfoList: profile[];
}

// eslint-disable-next-line prettier/prettier
export async function getMyShareGroup(): Promise<IShareGroupInfo[]> {
  try {
    const response = await authInstance().get('/shareGroups/my');
    if (response.status === 200) {
      return response.data.shareGroupInfoList;
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
): Promise<IShareGroupMember> {
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
