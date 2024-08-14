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
}

interface ShareGroup {
  shareGroupId: number; // 공유 그룹 id
  name: string; // 공유 그룹 이름
  image: string; // 공유 그룹 이미지 URL
  memberCount: number; // 공유 그룹에 참여한 회원 수
  createdAt: string; // 공유 그룹 생성일
  inviteUrl: string;
}

interface ShareGroupDetail {
  shareGroupId: number; // 공유 그룹 id
  memberList: ShareGroupDetailMember[]; // 공유 그룹에 속한 회원들의 정보
}

interface ShareGroupDetailMember {
  id: number; // 공유 그룹 멤버 id
  photos: string[]; // 공유 그룹에 속한 사진들의 URL
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
});

export const shareGroupMemberListState = atom<profile[] | null>({
  key: 'shareGroupMemberList',
  default: [],
});

export const shareGroupDetailSelectedImageState = atom<ShareGroupDetail | null>(
  {
    key: 'shareGroupDetailSelectedImage',
    default: {
      shareGroupId: 1,
      memberList: [
        {
          id: 1,
          photos: [
            'https://i.imgur.com/GfKSahj.jpeg',
            'https://i.imgur.com/GfKSahj.jpeg',
            'https://i.imgur.com/GfKSahj.jpeg',
          ],
        },
        {
          id: 2,
          photos: [
            'https://i.imgur.com/GfKSahj.jpeg',
            'https://i.imgur.com/GfKSahj.jpeg',
            'https://i.imgur.com/GfKSahj.jpeg',
          ],
        },
        {
          id: 3,
          photos: [
            'https://i.imgur.com/GfKSahj.jpeg',
            'https://i.imgur.com/GfKSahj.jpeg',
            'https://i.imgur.com/GfKSahj.jpeg',
          ],
        },
      ],
    },
  },
);

export const selectedGroupName = atom<string>({
  key: 'selectedGroupName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
