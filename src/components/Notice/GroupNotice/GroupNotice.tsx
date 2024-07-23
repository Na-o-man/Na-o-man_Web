import React from 'react';
import * as S from './Styles';
import * as I from 'assets/icon';
import { GroupList, Profile, Text } from './Styles';

const GroupNotice = () => {
  return (
    <S.Layout>
      <GroupList></GroupList>
      <Profile></Profile>
      <Text>[그룹명]에 [유저명] 님이 n장의 사진을 업로드했습니다.</Text>
    </S.Layout>
  );
};

export default GroupNotice;
