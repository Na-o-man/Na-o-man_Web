import { atom } from 'recoil';

export const loginState = atom({
  key: 'loginState',
  default: { isLoggedIn: false, provider: 'null' },
});

export const clauseState = atom({
  key: 'clauseState',
  default: { isClauseIn: false },
});
