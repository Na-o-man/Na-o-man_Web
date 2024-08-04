import React, { useState } from 'react';
import * as S from './Styles';
import * as I from 'assets/icon';
import Header from 'components/Header/Header';
import { DownCloud, IndexTag, NoticeTag } from './Styles';
import GroupNotice from './GroupNotice/GroupNotice';
import background from '../../assets/background/cloudRight.png';

interface NoticeType {
  id: number;
  groupName: string;
  userName: string;
  photoCount: number;
  read?: boolean;
}

const Notice = () => {
  const [notices, setNotices] = useState<NoticeType[]>([
    {
      id: 1,
      groupName: '개발자 그룹',
      userName: '홍길동',
      photoCount: 5,
      read: false,
    },
    {
      id: 2,
      groupName: '디자인 팀',
      userName: '김영희',
      photoCount: 3,
      read: false,
    },
  ]);

  // 모든 알림 읽기
  const handleMarkAllAsRead = () => {
    setNotices(notices.map((notice) => ({ ...notice, read: true })));
  };

  //전체 삭제
  const handleMarkAllDelete = () => {
    setNotices([]);
  };

  //알림을 모두 다 읽었는지 확인
  const allRead = notices.every((notice) => notice.read);

  //알림이 모두 다 지워졌는지 확인
  const allDeleteDisabled = notices.length === 0;

  const handleReadAlarm = (id: number) => {
    setNotices(
      notices.map((notice) =>
        notice.id === id ? { ...notice, read: true } : notice,
      ),
    );
  };

  return (
    <S.Layout>
      <S.Background src={background}></S.Background>
      <S.H>
        <Header backarrow></Header>
      </S.H>
      <IndexTag></IndexTag>
      <NoticeTag>알림</NoticeTag>

      <S.NoticeBtn style={{ left: '45%' }} />
      <S.TextRead
        style={{ left: '47.5%' }}
        onClick={handleMarkAllAsRead}
        isDisabled={allRead}
      >
        <div>모두 읽음</div>
      </S.TextRead>

      <S.NoticeBtn style={{ left: '67%' }} />
      <S.TextDelete
        style={{ left: '69.5%' }}
        onClick={handleMarkAllDelete}
        isDisabled={allDeleteDisabled}
      >
        <div>전체 삭제</div>
      </S.TextDelete>

      <S.NoticeContainer>
        <S.NoticeBox>
          {notices.map((notice) => (
            <GroupNotice
              key={notice.id}
              groupName={notice.groupName}
              userName={notice.userName}
              photoCount={notice.photoCount}
              onClick={() => handleReadAlarm(notice.id)}
              read={!!notice.read}
            />
          ))}
        </S.NoticeBox>
      </S.NoticeContainer>

      <DownCloud></DownCloud>
    </S.Layout>
  );
};

export default Notice;
