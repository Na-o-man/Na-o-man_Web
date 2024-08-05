import { atom } from 'recoil';
import { NotificationInfoList } from '../../recoil/types/notice';

export const noticesState = atom<NotificationInfoList[]>({
  key: 'noticesState',
  default: [],
});

export const unreadNoticesState = atom<NotificationInfoList[]>({
  key: 'unreadNoticesState',
  default: [],
});
