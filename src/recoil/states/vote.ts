import { atom } from 'recoil';
import {
  agendaPhotosListType,
  agendasListType,
  registeredPicsType,
} from 'recoil/types/vote';
import profile1 from '../../assets/samples/profile1.jpg';
import profile2 from '../../assets/samples/profile2.jpg';
import profile3 from '../../assets/samples/profile3.jpg';
import profile4 from '../../assets/samples/profile4.jpg';
import photo1 from '../../assets/samples/photo1.jpg';
import photo2 from '../../assets/samples/photo2.jpg';
import photo3 from '../../assets/samples/photo3.jpg';
import photo4 from '../../assets/samples/photo4.jpg';

export const isModalOpen = atom<boolean>({
  key: 'isModalOpen',
  default: false,
});

export const isAlertPop = atom<boolean>({
  key: 'isAlertPop',
  default: false,
});

export const shareGroupList = atom<string[]>({
  key: 'shareGroupList',
  default: ['제주도', '2024 졸업전시', '보라카이', '제주도 에코랜드'],
});

// 안건 목록
export const agendasList = atom<agendasListType[]>({
  key: 'agendasList',
  default: [
    {
      agendaId: 1,
      title: '이번 여행을 대표할 엽사는?',
      agendaPhotosList: [
        {
          agendaPhotoId: 1,
          url: photo1,
          votesList: [
            {
              voteId: 1,
              comment: '멋있다!',
              profileInfo: {
                profileId: 1,
                name: '이현',
                profileImage: profile1,
                memberId: 1,
              },
              agendaPhotoId: 1,
              isMine: true,
              votedAt: '2024-08-8T17:46:37.780Z',
            },
            {
              voteId: 2,
              comment: '귀엽다!',
              profileInfo: {
                profileId: 2,
                name: '베스',
                profileImage: profile2,
                memberId: 2,
              },
              agendaPhotoId: 1,
              isMine: false,
              votedAt: '2024-08-9T17:46:37.780Z',
            },
            {
              voteId: 3,
              comment: '좋다!',
              profileInfo: {
                profileId: 3,
                name: '콜리',
                profileImage: profile3,
                memberId: 3,
              },
              agendaPhotoId: 1,
              isMine: false,
              votedAt: '2024-08-11T17:46:37.780Z',
            },
          ],
          voteCount: 3,
        },
        {
          agendaPhotoId: 2,
          url: photo2,
          votesList: [
            {
              voteId: 1,
              comment: '좋다!',
              profileInfo: {
                profileId: 3,
                name: '콜리',
                profileImage: profile3,
                memberId: 3,
              },
              agendaPhotoId: 2,
              isMine: false,
              votedAt: '2024-08-8T17:46:37.780Z',
            },
            {
              voteId: 2,
              comment: '좋다!',
              profileInfo: {
                profileId: 4,
                name: '낭니',
                profileImage: profile4,
                memberId: 4,
              },
              agendaPhotoId: 2,
              isMine: false,
              votedAt: '2024-08-11T17:46:37.780Z',
            },
          ],
          voteCount: 2,
        },
      ],
    },
    {
      agendaId: 2,
      title: '가장 기억나는 순간은?',
      agendaPhotosList: [
        {
          agendaPhotoId: 1,
          url: photo3,
          votesList: [],
          voteCount: 0,
        },
        {
          agendaPhotoId: 2,
          url: photo4,
          votesList: [
            {
              voteId: 1,
              comment: '좋다!',
              profileInfo: {
                profileId: 3,
                name: '콜리',
                profileImage: profile3,
                memberId: 3,
              },
              agendaPhotoId: 2,
              isMine: false,
              votedAt: '2024-08-8T17:46:37.780Z',
            },
            {
              voteId: 2,
              comment: '좋다!',
              profileInfo: {
                profileId: 4,
                name: '낭니',
                profileImage: profile4,
                memberId: 4,
              },
              agendaPhotoId: 2,
              isMine: false,
              votedAt: '2024-08-11T17:46:37.780Z',
            },
          ],
          voteCount: 2,
        },
        {
          agendaPhotoId: 3,
          url: photo1,
          votesList: [
            {
              voteId: 1,
              comment: '멋있다!',
              profileInfo: {
                profileId: 1,
                name: '이현',
                profileImage: profile1,
                memberId: 1,
              },
              agendaPhotoId: 3,
              isMine: true,
              votedAt: '2024-08-8T17:46:37.780Z',
            },
            {
              voteId: 2,
              comment: '귀엽다!',
              profileInfo: {
                profileId: 2,
                name: '베스',
                profileImage: profile2,
                memberId: 2,
              },
              agendaPhotoId: 3,
              isMine: false,
              votedAt: '2024-08-9T17:46:37.780Z',
            },
            {
              voteId: 3,
              comment: '좋다!',
              profileInfo: {
                profileId: 3,
                name: '콜리',
                profileImage: profile3,
                memberId: 3,
              },
              agendaPhotoId: 3,
              isMine: false,
              votedAt: '2024-08-10T17:46:37.780Z',
            },
            {
              voteId: 4,
              comment: '좋다!',
              profileInfo: {
                profileId: 4,
                name: '낭니',
                profileImage: profile4,
                memberId: 4,
              },
              agendaPhotoId: 3,
              isMine: false,
              votedAt: '2024-08-11T17:46:37.780Z',
            },
          ],
          voteCount: 4,
        },
        {
          agendaPhotoId: 4,
          url: photo2,
          votesList: [],
          voteCount: 0,
        },
      ],
    },
  ],
});

export const selectedAgendaId = atom<number>({
  key: 'selectedAgendaId',
  default: undefined,
});

//안건 상세조회 저장 api
export const selectedAgenda = atom<agendasListType | null>({
  key: 'selectedAgenda',
  default: null,
});

//투표현황 조회 결과 저장 api
export const selectedAgendaPics = atom<agendaPhotosListType[] | null>({
  key: 'selectedAgendaPics',
  default: null,
});

// 안건에 등록할 사진들
export const registeredPics = atom<registeredPicsType[]>({
  key: 'registerdPics',
  default: [
    {
      pictureId: 1,
      url: photo1,
      agendaId: 1,
    },
    {
      pictureId: 2,
      url: photo2,
      agendaId: 1,
    },
  ],
});

export const selectedPic = atom<registeredPicsType>({
  key: 'selectedPic',
  default: { pictureId: 1, url: photo1, agendaId: 1 },
});
