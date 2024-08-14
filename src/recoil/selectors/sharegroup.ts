import { selectorFamily } from 'recoil';
import { shareGroupListState } from 'recoil/states/share_group';

export const groupSelectorbyId = selectorFamily({
  key: 'groupSelectorbyId',
  get:
    (id: number) =>
    ({ get }) => {
      const groups = get(shareGroupListState);
      const selectedGroup = groups.filter((val) => val.shareGroupId === id);
      return selectedGroup[0];
    },
});
