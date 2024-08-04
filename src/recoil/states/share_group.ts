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

export const shareGroupListState = atom<ShareGroup[] | null>({
  key: 'shareGroupListState',
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

export const shareGroupMemberListState = atom<profile[] | null>({
  key: 'shareGroupMemberList',
  default: [
    {
      profileId: 1,
      name: '한석봉',
      image: 'https://avatars.githubusercontent.com/u/6400346?v=4',
      memberId: 1,
    },
    {
      profileId: 2,
      name: '김동현',
      image: 'https://avatars.githubusercontent.com/u/6400346?v=4',
      memberId: 2,
    },
    {
      profileId: 3,
      name: '김민수',
      image: 'https://avatars.githubusercontent.com/u/6400346?v=4',
      memberId: 3,
    },
    {
      profileId: 4,
      name: '김민수',
      image: 'https://avatars.githubusercontent.com/u/6400346?v=4',
      memberId: 4,
    },
    {
      profileId: 5,
      name: '김민수',
      image: 'https://avatars.githubusercontent.com/u/6400346?v=4',
      memberId: 5,
    },
    {
      profileId: 6,
      name: '김민수',
      image: 'https://avatars.githubusercontent.com/u/6400346?v=4',
      memberId: 6,
    },
    {
      profileId: 7,
      name: '김민수',
      image: 'https://avatars.githubusercontent.com/u/6400346?v=4',
      memberId: 7,
    },
  ],
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
