import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'persist-atom-key',
  storage: localStorage,
});

interface profile {
  profileId: number; // 프로필 id
  name: string; // 프로필 이름
  image: string; // URL 형식
  memberId: number; // 해당 프로필로 참여한 회원의 id. 생략할지 고민중
  isAllPhoto?: boolean; // 모든 사진을 볼 수 있는 폴더
  isEtcPhoto?: boolean; // 기타 사진을 볼 수 있는 폴더
}

interface ShareGroup {
  shareGroupId: number; // 공유 그룹 id
  name: string; // 공유 그룹 이름
  image: string | null; // 공유 그룹 이미지 URL
  memberCount: number; // 공유 그룹에 참여한 회원 수
  createdAt: string; // 공유 그룹 생성일
  inviteUrl?: string;
}

export const isModalState = atom({
  key: 'isShareGroupImageModalOpen',
  default: false,
});

export const selectedImageState = atom<string | null>({
  key: 'shareGroupDetailSelectedImage',
  default: null,
});

export const shareGroupListState = atom<ShareGroup[]>({
  key: 'shareGroupListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const shareGroupMemberListState = atom<profile[]>({
  key: 'shareGroupMemberList',
  default: [],
});

export const selectedGroupName = atom<string>({
  key: 'selectedGroupName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const dropDownTitle = atom<string>({
  key: 'dropDownTitle',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const folderCurrentIndex = atom<number>({
  key: 'folderCurrentIndex',
  default: 0,
});
