import { atom } from 'recoil';

export const isModalState = atom({
  key: 'isShareGroupImageModalOpen',
  default: false,
});

export const selectedImageState = atom<string | null>({
  key: 'shareGroupDetailSelectedImage',
  default: null,
});
