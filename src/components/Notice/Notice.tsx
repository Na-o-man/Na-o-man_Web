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
  const [notices, setNotices] = useState<NotificationInfoList[]>([]);
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
  const handleMarkAllAsRead = async () => {
    try {
      const unreadIds = notices
        .filter((notice) => !notice.isChecked)
        .map((notice) => notice.link);

      if (unreadIds.length === 0) {
        return;
      }

      await Promise.all(unreadIds.map((id) => handleMarkAsRead(id)));

      setNotices((prevNotices) =>
        prevNotices.map((notice) => ({ ...notice, isChecked: true })),
      );
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
      <S.H>
        <Header backarrow />
      </S.H>
      <IndexTag />
      <NoticeTag>알림</NoticeTag>
      <S.NoticeBtn style={{ left: '45%' }} />
      <S.TextRead
        style={{
          left: '48.5%',
          opacity: allRead ? 0.5 : 1,
          pointerEvents: allRead ? 'none' : 'auto',
        }}
        onClick={handleMarkAllAsRead}
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
        onClick={handleDeleteAllNotifications}
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
              onClick={() => markNotificationAsRead(notice.link)}
              onDelete={() => handleDeleteNotification(notice.link)}
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
