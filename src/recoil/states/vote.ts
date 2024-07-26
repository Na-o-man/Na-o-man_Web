import { atom } from 'recoil';

export const isModalOpen = atom<boolean>({
  key: 'isModalOpen',
  default: false,
});

export const isAlertPop = atom<boolean>({
  key: 'isAlertPop',
  default: false,
});
