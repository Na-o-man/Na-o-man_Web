//안건 목록
export interface agendasListType {
  agendaId: number;
  title: string;
  agendaPhotosList: agendaPhotosListType[];
}
//안건 사진
export interface agendaPhotosListType {
  voteCount: number;
  agendaPhotoId: number;
  url: string;
  votesList: voteInfoList[];
}
//투표 정보
export interface voteInfoList {
  voteId: number; // 몇 번째 투표인지 식별하는 ID
  comment: string;
  profileInfo: profileInfo; //투표자정보
  agendaPhotoId: number; // 관련된 안건 사진 ID
  isMine: boolean; // 투표 항목이 현재 사용자에 의해 제출된 것인지 여부
  votedAt: string; //날짜
}
//투표자정보
export interface profileInfo {
  profileId: number; //사용자 ID (선택적)
  name: string; //닉네임
  profileImage: string;
  memberId: number; //사용자를 고유하게 식별하는 ID
}
//등록된 사진 정보
export interface registeredPicsType {
  pictureId: number;
  url: string;
  comment?: string;
  voteId?: number;
  agendaId: number;
}

export interface PostApiResponse {
  status: number;
  code: string;
  message: string;
  data: {
    voteIdList: agendaPhotosListType[];
  };
}

export interface GetApiResponse {
  status: number;
  code: string;
  message: string;
  data: {
    agendaPhotoId: number;
    voteInfoList: voteInfoList[];
    voteCount: number;
  }[];
}
