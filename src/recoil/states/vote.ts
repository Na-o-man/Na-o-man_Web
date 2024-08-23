import { atom } from 'recoil';
import {
  agendaPhotosListType,
  agendasListType,
  registeredPicsType,
} from 'recoil/types/vote';
import photo1 from '../../assets/samples/photo1.jpg';
import photo2 from '../../assets/samples/photo2.jpg';
import { ShareGroup } from './share_group';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'persist-atom-key',
  storage: localStorage,
});

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
  default: [], // 빈 배열로 초기화
});

export const agendasList = atom<agendasListType[]>({
  key: 'agendasList',
  default: [], // 빈 배열로 초기화
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

// 투표하기 위해 누른 사진
export const selectedPic = atom<registeredPicsType>({
  key: 'selectedPic',
  default: undefined,
});

export const agendaTitle = atom<string>({
  key: 'agendaTitle',
  default: '',
});

export const dropdownData = atom<ShareGroup[]>({
  key: 'dropdownData',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const addedAgendaPhotos = atom<string[]>({
  key: 'addedAgendaPhotos',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const addedAgendaSrcs = atom<number[]>({
  key: 'addedAgendaSrcs',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const choiceMode = atom<boolean>({
  key: 'choiceMode',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const albumDropDownTitle = atom<string>({
  key: 'albumDropDownTitle',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
