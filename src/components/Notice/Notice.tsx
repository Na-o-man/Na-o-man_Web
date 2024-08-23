import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import { DownCloud, IndexTag, NoticeTag } from './Styles';
import GroupNotice from './GroupNotice/GroupNotice';
import background from '../../assets/background/cloudRight.png';
import { useRecoilState } from 'recoil';
import { unreadNoticesState } from 'recoil/states/notice';

const Notice = () => {
  const [notices, setNotices] = useRecoilState(unreadNoticesState);

  // 알림 읽음 처리
  const handleRead = (index: number) => {
    setNotices((prevNotices) =>
      prevNotices.map((notice, i) =>
        i === index ? { ...notice, isChecked: true } : notice,
      ),
    );
  };

  // 알림 모두 읽음 처리
  const handleAllRead = () => {
    setNotices((prevNotices) =>
      prevNotices.map((notice) => ({ ...notice, isChecked: true })),
    );
  };

  // 특정 알림 삭제 처리
  const handleDeleteNotification = (index: number) => {
    setNotices((prevNotices) => prevNotices.filter((_, i) => i !== index));
  };

  // 알림 모두 삭제
  const handleDeleteNotice = () => {
    setNotices([]);
  };

  const allRead = notices.every((notice) => notice.isChecked);
  const allDeleteDisabled = notices.length === 0;

  return (
    <S.Layout>
      <S.Background src={background} />
      <Header backarrow />
      <IndexTag />
      <NoticeTag>알림</NoticeTag>
      <S.ButtonBox>
        <S.NoticeBtn style={{ position: 'absolute', right: '20%' }} />
        <S.NoticeBtn />
        <S.ButtonText
          style={{
            opacity: allRead ? 0.5 : 1,
            pointerEvents: allRead ? 'none' : 'auto',
            right: '20%',
          }}
          onClick={handleAllRead}
        >
          모두 읽음
        </S.ButtonText>
        <S.ButtonText
          style={{
            opacity: allDeleteDisabled ? 0.5 : 1,
            pointerEvents: allDeleteDisabled ? 'none' : 'auto',
          }}
          onClick={handleDeleteNotice}
        >
          전체 삭제
        </S.ButtonText>
      </S.ButtonBox>
      <S.NoticeContainer>
        <S.NoticeBox>
          {notices.map((notice, index) => (
            <GroupNotice
              key={index}
              groupName={notice.body}
              userName={notice.link}
              photoCount={0}
              onClick={() => handleRead(notice.index)}
              /* onDelete={() => handleDeleteNotification(index)} */
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
