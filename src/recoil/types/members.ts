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

//회원 탈퇴
export interface deleteResponse {
  status: number;
  code: string;
  message: string;
  data?:
    | {
        memberId: number;
        deletedAt: string;
      }
    | Array<{
        field: string;
        message: string;
      }>;
}

export interface samplePhotoResponse {
  status: number;
  code: string;
  message: string;
  data: {
    hasSamplePhoto: boolean;
  };
}
