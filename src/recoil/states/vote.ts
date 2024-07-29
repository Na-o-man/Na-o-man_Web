import { atom } from 'recoil';
import { agendaPhotosListType, agendasListType } from 'recoil/types/vote';
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
            { memberId: 1, profileImage: profile1 },
            { memberId: 2, profileImage: profile2 },
            { memberId: 3, profileImage: profile3 },
          ],
        },
        {
          agendaPhotoId: 2,
          url: photo2,
          votesList: [
            { memberId: 1, profileImage: profile3 },
            { memberId: 2, profileImage: profile4 },
          ],
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
        },
        {
          agendaPhotoId: 2,
          url: photo4,
          votesList: [
            { memberId: 1, profileImage: profile3 },
            { memberId: 2, profileImage: profile4 },
          ],
        },
        {
          agendaPhotoId: 3,
          url: photo1,
          votesList: [
            { memberId: 1, profileImage: profile1 },
            { memberId: 2, profileImage: profile2 },
            { memberId: 2, profileImage: profile3 },
            { memberId: 3, profileImage: profile4 },
          ],
        },
        {
          agendaPhotoId: 4,
          url: photo2,
          votesList: [],
        },
      ],
    },
  ],
});

export const selectedAgendaId = atom<number>({
  key: 'selectedAgendaId',
  default: undefined,
});

export const selectedPhoto = atom<agendaPhotosListType>({
  key: 'selectedPhoto',
  default: undefined,
});
