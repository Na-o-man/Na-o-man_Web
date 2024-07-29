import { selector, selectorFamily } from 'recoil';
import { agendasList, selectedAgendaId } from 'recoil/states/vote';

export const agendaPhotosList = selector({
  key: 'agendaPhotosList',
  get: ({ get }) => {
    const photoList = get(agendasList);
    photoList.map((list) => list.agendaPhotosList);
    return photoList;
  },
});

// 리스트에서 선택된 안건
export const selectedAgenda = selector({
  key: 'selectedAgenda',
  get: ({ get }) => {
    const agenda = get(agendasList);
    const id = get(selectedAgendaId);
    return agenda.filter((a) => a.agendaId === id);
  },
});
