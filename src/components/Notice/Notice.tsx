import React from 'react';
import * as S from './Styles';
import * as I from 'assets/icon';
import Header from 'components/Header/Header';
import { DownCloud, IndexTag, NoticeTag } from './Styles';
import GroupNotice from './GroupNotice/GroupNotice';
import cloudRight from '../../assets/background/cloudRight.png';

const Notice = () => {
  return (
    <S.Layout>
      <img
        src={cloudRight}
        style={{ width: '100%', position: 'absolute', zIndex: '0' }}
      ></img>
      <S.H>
        <Header backarrow></Header>
      </S.H>
      <IndexTag></IndexTag>
      <NoticeTag>알림</NoticeTag>
      <S.NoticeContainer>
        <S.NoticeBox>
          <GroupNotice />
          <GroupNotice />
          <GroupNotice />
          <GroupNotice />
          <GroupNotice />
          <GroupNotice />
          <GroupNotice />
        </S.NoticeBox>
      </S.NoticeContainer>

      <DownCloud></DownCloud>
    </S.Layout>
  );
};
export default Notice;
