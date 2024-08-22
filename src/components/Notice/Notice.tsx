import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import { DownCloud, IndexTag, NoticeTag } from './Styles';
import GroupNotice from './GroupNotice/GroupNotice';
import background from '../../assets/background/cloudRight.png';
import { NotificationInfoList } from '../../recoil/types/notice';
import {
  fetchNotices,
  fetchNoticesNotRead,
  markNotificationAsRead,
  deleteNotification,
  deleteAllNotifications,
} from '../../apis/getNotice';

const Notice = () => {
  const [error, setError] = useState<string | null>(null);
  const [notices, setNotices] = useState<NotificationInfoList[]>([
    {
      index: 0,
      body: '[개구쟁이 친구들과 발리 한마당 : 해변 히어로즈]에 김봉순 님이 10장의 사진을 업로드했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김봉순',
    },
    {
      index: 1,
      body: '[UMC 나ㅇ만]에 [황지원]님이 5장의 사진을 업로드했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '황지원',
    },
    {
      index: 2,
      body: '[나라사랑 등산사랑]의 [김혜경]님이 [베스트 등산라이더는?] 투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
    {
      index: 3,
      body: '[엄선아]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '엄선아',
    },
    {
      index: 4,
      body: '[조은정]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조은정',
    },
    {
      index: 5,
      body: '[UMC 나ㅇ만]의 [조나은]님이 [데모데이]투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조나은',
    },
    {
      index: 6,
      body: '[김현겸]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김현겸',
    },
    {
      index: 7,
      body: '[엄선아]님이 [Best Photo?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '엄선아',
    },
    {
      index: 8,
      body: '[2024 졸업전시]의 [황지원]님이 [Best Photo?]투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '황지원',
    },
    {
      index: 9,
      body: '[제주도 에코랜드]의 [김혜경]님이 [가장 분위기있는 사진은?]투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
    {
      index: 10,
      body: '[조은정]님이 [이번 여름을 대표할 엽사는?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조은정',
    },
    {
      index: 11,
      body: '[제주도 에코랜드]의 [엄선아]님이 [이번 여름을 대표할 엽사는?] 투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '엄선아',
    },
    {
      index: 12,
      body: '[김혜경]님이 [가장 멋진 풍경 사진은?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
    {
      index: 13,
      body: '[조나은]님이 [가장 멋진 풍경 사진은?]에 투표했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '조나은',
    },
    {
      index: 14,
      body: '[제주도 에코랜드]의 [김현겸]님이 [가장 멋진 풍경 사진은?] 투표를 열었습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김현겸',
    },
    {
      index: 15,
      body: '[UMC 나ㅇ만]에 [김혜경]님이 7장의 사진을 업로드했습니다.',
      createdAt: '2024-08-22',
      isChecked: false,
      link: '김혜경',
    },
  ]);
  const [unreadNotices, setUnreadNotices] = useState<boolean>(false);
  const page = '0';
  const size = '10';

  useEffect(() => {
    const loadNotices = async () => {
      try {
        const fetchedNotices = await fetchNotices(page, size);
        setNotices(fetchedNotices);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : '알림을 가져오는 중 알 수 없는 오류가 발생했습니다.',
        );
      }

      try {
        const isUnread = await fetchNoticesNotRead();
        console.log('Unread notifications:', isUnread);
        setUnreadNotices(isUnread);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : '읽지 않은 알림의 존재 여부를 가져오는 중 알 수 없는 오류가 발생했습니다.',
        );
      }
    };

    loadNotices();
  }, []);

  // 알림 읽음 처리
  // 알림 읽음 처리
  const handleRead = (index: number) => {
    setNotices((prevNotices) =>
      prevNotices.map((notice, i) =>
        i === index ? { ...notice, isChecked: true } : notice,
      ),
    );
  };

  // 알림 읽음 처리 api
  const handleMarkAsRead = async (id: string) => {
    try {
      await markNotificationAsRead(id);

      setNotices((prevNotices) =>
        prevNotices.map((notice) =>
          notice.link === id ? { ...notice, isChecked: true } : notice,
        ),
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : '알림을 읽음으로 표시하는 중 오류가 발생했습니다.',
      );
    }
  };

  // 알림 모두 읽음 처리
  const handleAllRead = async () => {
    setNotices((prevNotices) =>
      prevNotices.map((notice) => ({ ...notice, isChecked: true })),
    );
  };
  //알림 모두 읽음 처리 api
  const handleMarkAllAsRead = async () => {
    try {
      const unreadIds = notices
        .filter((notice) => !notice.isChecked)
        .map((notice) => notice.link);

      if (unreadIds.length === 0) {
        return;
      }

      await Promise.all(unreadIds.map((id) => handleMarkAsRead(id)));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : '알림을 모두 읽음으로 표시하는 중 오류가 발생했습니다.',
      );
    }
  };

  // 특정 알림 삭제 처리
  const handleDeleteNotification = async (id: string) => {
    try {
      await deleteNotification(id);
      setNotices((prevNotices) =>
        prevNotices.filter((notice) => notice.link !== id),
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : '알림을 삭제하는 중 오류가 발생했습니다.',
      );
    }
  };

  //알림 모두 삭제
  const handleDeleteNotice = async () => {
    setNotices([]);
  };
  //알림 모두 삭제 처리 api
  const handleDeleteAllNotifications = async () => {
    try {
      await deleteAllNotifications();
      setNotices([]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : '알림을 모두 삭제하는 중 오류가 발생했습니다.',
      );
    }
  };

  const allRead = notices.every((notice) => notice.isChecked);
  const allDeleteDisabled = notices.length === 0;

  return (
    <S.Layout>
      <S.Background src={background} />
      <Header backarrow />
      <IndexTag />
      <NoticeTag>알림</NoticeTag>
      <S.NoticeBtn style={{ left: '45%' }} />
      <S.TextRead
        style={{
          left: '48.5%',
          opacity: allRead ? 0.5 : 1,
          pointerEvents: allRead ? 'none' : 'auto',
        }}
        onClick={handleAllRead}
      >
        모두 읽음
      </S.TextRead>
      <S.NoticeBtn style={{ left: '67%' }} />
      <S.TextDelete
        style={{
          left: '70.5%',
          opacity: allDeleteDisabled ? 0.5 : 1,
          pointerEvents: allDeleteDisabled ? 'none' : 'auto',
        }}
        onClick={handleDeleteNotice}
      >
        전체 삭제
      </S.TextDelete>
      <S.NoticeContainer>
        <S.NoticeBox>
          {notices.map((notice, index) => (
            <GroupNotice
              key={index}
              groupName={notice.body}
              userName={notice.link}
              photoCount={0}
              onClick={() => handleRead(notice.index)}
              /*onDelete={() => handleDeleteNotification(notice.link)}*/
              read={notice.isChecked}
            />
          ))}
        </S.NoticeBox>
      </S.NoticeContainer>

      <DownCloud />
    </S.Layout>
  );
};

export default Notice;
