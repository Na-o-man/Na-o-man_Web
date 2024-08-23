import React from 'react';
import * as S from './Styles';
import defaultProfile from '../../../assets/samples/emptyProfile.png';

interface ListProps {
  name: string;
  image: string | null;
  memberCount: number;
  createdAt: string;
}

const ShareGroupListItem: React.FC<ListProps> = ({
  name,
  image,
  createdAt,
  memberCount,
}) => {
  return (
    <S.Layout>
      <S.GroupList />
      {image ? (
        <S.ProfileImage src={image} alt="profile" />
      ) : (
        <S.ProfileImage src={defaultProfile} />
      )}
      <S.Container>
        <S.Title
          isLong={
            name.length < 10 /* 이름 길이가 10자 이하이면 20px, 아니면 12px */
          }
        >
          {name}
        </S.Title>
        <S.DateBox>
          <S.PeopleCountBox>
            <S.PeopleIcon />
            <S.DateText>{memberCount}</S.DateText>
          </S.PeopleCountBox>
          <S.DateText>{createdAt}</S.DateText>
        </S.DateBox>
      </S.Container>
    </S.Layout>
  );
};

export default ShareGroupListItem;
