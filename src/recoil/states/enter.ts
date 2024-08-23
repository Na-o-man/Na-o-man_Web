import { atom } from 'recoil';
import { UserStateType } from 'recoil/types/enter';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'persist-atom-key',
  storage: localStorage,
});

export const loginState = atom({
  key: 'loginState',
  default: { isLoggedIn: false, provider: 'null' },
});

export const clauseState = atom({
  key: 'clauseState',
  default: { isClauseIn: false },
});

export const UserState = atom<UserStateType | null>({
  key: 'UserState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const redirectPath = atom<string>({
  key: 'redirectPath',
  default: '/group',
});

export const accessToken = atom<string>({
  key: 'accessToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
