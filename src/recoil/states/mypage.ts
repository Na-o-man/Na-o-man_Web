import { atom } from 'recoil';

export const myPageModalState = atom({
  key: 'myPageModalOpen',
  default: false,
});

export const modalMessageState = atom({
  key: 'modalMessageState',
  default: '',
});

export const modalDataState = atom<{ memberId: number } | undefined>({
  key: 'modalDataState',
  default: undefined,
});
