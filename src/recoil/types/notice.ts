export interface NotificationInfoList {
  index: number;
  body: string;
  createdAt: string;
  isChecked: boolean;
  link: string;
}

export interface ResponseData {
  notificationInfoList: NotificationInfoList[];
  page: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface ApiResponse {
  status: number;
  code: number;
  message: string;
  data: {
    notificationInfoList: NotificationInfoList[];
    isUnread?: boolean;
  };
}
export interface PostApiResponse {
  status: number;
  code: number;
  message: string;
  data: {
    acknowledgedCount: number;
  };
}
