export interface agendasListType {
  agendaId: number;
  title: string;
  agendaPhotosList: agendaPhotosListType[];
}

export interface agendaPhotosListType {
  agendaPhotoId: number;
  url: string;
  votesList: votersListType[];
}

export interface votersListType {
  memberId: number;
  profileImage: string;
}

export interface registeredPicsType {
  pictureId: number;
  url: string;
}
