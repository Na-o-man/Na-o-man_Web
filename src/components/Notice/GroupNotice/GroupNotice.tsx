import React from 'react';
import * as S from './Styles';
import * as I from 'assets/icon';
import { useRecoilValue } from 'recoil';
import { UserState } from 'recoil/states/enter';
import { GroupList, Profile, Text } from './Styles';
import defaultProfileImage from '../../../assets/samples/emptyProfile.png';

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
  onClick,
  /*onDelete,*/
  read,
}) => {
  const userInfo = useRecoilValue(UserState);
  return (
    <S.ListContainer onClick={onClick} read={read}>
      <GroupList />
      <S.Profile src={userInfo?.image || defaultProfileImage} />
      <Text>{groupName}</Text>
    </S.ListContainer>
  );
};

export default GroupNotice;
