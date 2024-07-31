import { atom } from 'recoil';

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
}

export const isModalState = atom({
  key: 'isShareGroupImageModalOpen',
  default: false,
});

export const selectedImageState = atom<string | null>({
  key: 'shareGroupDetailSelectedImage',
  default: null,
});

export const shareGroupListState = atom<ShareGroup[] | null>({
  key: 'shareGroupList',
  default: [
    {
      shareGroupId: 1,
      name: '그룹 이름',
      image: 'https://i.imgur.com/GfKSahj.jpeg',
      memberCount: 3,
      createdAt: '2021-08-18',
    },
    {
      shareGroupId: 2,
      name: '그룹 이름2',
      image: 'https://i.imgur.com/GfKSahj.jpeg',
      memberCount: 5,
      createdAt: '2021-08-18',
    },
    {
      shareGroupId: 3,
      name: '그룹 이름3',
      image: 'https://i.imgur.com/GfKSahj.jpeg',
      memberCount: 7,
      createdAt: '2021-08-18',
    },
    {
      shareGroupId: 4,
      name: '그룹 이름4',
      image: 'https://i.imgur.com/GfKSahj.jpeg',
      memberCount: 2,
      createdAt: '2021-08-18',
    },
    {
      shareGroupId: 5,
      name: '그룹 이름5',
      image: 'https://i.imgur.com/GfKSahj.jpeg',
      memberCount: 4,
      createdAt: '2021-08-18',
    },
  ],
});
