export interface emailResponse {
  status: number;
  code: string;
  message: string;
  data: {
    isRegistered: boolean;
  };
}

export interface marketingResponse {
  status: number;
  code: string;
  message: string;
  data: {
    marketingAgreed?: boolean;
    field?: string;
    message?: string;
  };
}

//회원 탈퇴 (추후 수정)
export interface deleteResponse {
  status: number;
  code: string;
  message: string;
  data: {
    memberId: number;
    deleted_at: string;
  };
}

export interface samplePhotoResponse {
  status: number;
  code: string;
  message: string;
  data: {
    hasSamplePhoto: boolean;
  };
}
