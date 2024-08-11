export interface emailResponse {
  status: number;
  code: number;
  message: string;
  data: {
    isRegistered: boolean;
  };
}

export interface marketingResponse {
  status: number;
  code: number;
  message: string;
  data: {
    marketingAgreed?: boolean;
    field?: string;
    message?: string;
  };
}
