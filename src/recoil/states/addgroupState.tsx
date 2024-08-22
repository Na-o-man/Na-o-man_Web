import { atom } from 'recoil';

interface newGroupDataProp {
  name: string;
  memberCount: 0;
  createdAt: string;
}

// 이름 상태
export const namesState = atom<string[]>({
  key: 'namesState',
  default: [],
});

// 성격 상태 추가
export const typeState = atom<string[]>({
  key: 'typeState',
  default: [],
});

export const newtypeState = atom<string>({
  key: 'newtypeState',
  default: '',
});

// 장소 상태 추가
export const placeState = atom<string>({
  key: 'placeState',
  default: '',
});

export const newGroupData = atom<newGroupDataProp>({
  key: 'newGroupData',
  default: undefined,
});
