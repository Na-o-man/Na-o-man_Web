import React, { useEffect, useState } from 'react';
import ShareGroupListItem from '../ShareGroupListItem/ShareGroupListItem';
import * as S from './Styles';
import { StyledNavLink } from 'components/Common/DropDown/Styles';

interface ListViewProps {
  items: Array<{
    shareGroupId: number; // 공유 그룹 ID
    name: string; // 공유 그룹 이름
    image: string; // 공유 그룹 이미지 URL
    memberCount: number; // 공유 그룹에 참여한 회원 수
    createdAt: string; // 생성일
  }>;
}

const ShareGruopListView: React.FC<ListViewProps> = ({ items }) => {
  return (
    <S.Layout>
      {items.map((item) => (
        <StyledNavLink
          to={`/group/${item.shareGroupId}`}
          key={item.shareGroupId}
        >
          <S.Container>
            <ShareGroupListItem {...item} />
          </S.Container>
        </StyledNavLink>
      ))}
    </S.Layout>
  );
};

export default ShareGruopListView;
