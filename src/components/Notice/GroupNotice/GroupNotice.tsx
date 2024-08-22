import React from 'react';
import * as S from './Styles';
import * as I from 'assets/icon';
import { useRecoilValue } from 'recoil';
import { UserState } from 'recoil/states/enter';
import { GroupList, Profile, Text } from './Styles';

// props의 타입 정의
interface GroupNoticeProps {
  groupName: string;
  userName: string;
  photoCount: number;
  onClick: () => void; // 클릭 이벤트 핸들러 추가
  /*onDelete: () => void;*/
  read: boolean; // 추가된 부분
}

const GroupNotice: React.FC<GroupNoticeProps> = ({
  groupName,
  userName,
  photoCount,
  onClick,
  /*onDelete,*/
  read,
}) => {
  const userInfo = useRecoilValue(UserState);
  return (
    <S.Layout>
      <S.ListContainer onClick={onClick} read={read}>
        <GroupList></GroupList>
        <Profile src={userInfo?.image}></Profile>
        <Text>
          {/*[{groupName}]에 [{userName}] 님이 {photoCount}장의 사진을
          업로드했습니다.*/}
          {groupName}
        </Text>
      </S.ListContainer>
    </S.Layout>
  );
};

export default GroupNotice;
