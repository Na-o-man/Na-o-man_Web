import { atom } from 'recoil';
import { NotificationInfoList } from '../../recoil/types/notice';

export const noticesState = atom<NotificationInfoList[]>({
  key: 'noticesState',
  default: [],
});

export const unreadNoticesState = atom<NotificationInfoList[]>({
  key: 'unreadNoticesState',
  default: [
    {
      index: 0,
      body: '[개구쟁이 친구들과 발리 한마당 : 해변 히어로즈]에 김봉순 님이 10장의 사진을 업로드했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김봉순',
    },
    {
      index: 1,
      body: '[UMC 나ㅇ만]에 [황지원]님이 5장의 사진을 업로드했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '황지원',
    },
    {
      index: 2,
      body: '[나라사랑 등산사랑]의 [김혜경]님이 [베스트 등산라이더는?] 투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
    {
      index: 3,
      body: '[엄선아]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '엄선아',
    },
    {
      index: 4,
      body: '[조은정]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조은정',
    },
    {
      index: 5,
      body: '[UMC 나ㅇ만]의 [조나은]님이 [데모데이]투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조나은',
    },
    {
      index: 6,
      body: '[김현겸]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김현겸',
    },
    {
      index: 7,
      body: '[엄선아]님이 [Best Photo?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '엄선아',
    },
    {
      index: 8,
      body: '[2024 졸업전시]의 [황지원]님이 [Best Photo?]투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '황지원',
    },
    {
      index: 9,
      body: '[제주도 에코랜드]의 [김혜경]님이 [가장 분위기있는 사진은?]투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
    {
      index: 10,
      body: '[조은정]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조은정',
    },
    {
      index: 11,
      body: '[제주도 에코랜드]의 [엄선아]님이 [이번 여름을 대표할 엽사는?] 투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '엄선아',
    },
    {
      index: 12,
      body: '[김혜경]님이 [가장 멋진 풍경 사진은?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
    {
      index: 13,
      body: '[조나은]님이 [가장 멋진 풍경 사진은?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조나은',
    },
    {
      index: 14,
      body: '[제주도 에코랜드]의 [김현겸]님이 [가장 멋진 풍경 사진은?] 투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김현겸',
    },
    {
      index: 15,
      body: '[UMC 나ㅇ만]에 [김혜경]님이 7장의 사진을 업로드했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
  ],
});
