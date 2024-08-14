import React from 'react';
import ShareGroupListItem from '../ShareGroupListItem/ShareGroupListItem';
import * as S from './Styles';
import { StyledNavLink } from 'components/Common/DropDown/Styles';
import { useSetRecoilState } from 'recoil';
import { selectedGroupName } from 'recoil/states/share_group';

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
  const setSelectedGroup = useSetRecoilState(selectedGroupName);
  return (
    <S.Layout>
      {items.map((item) => (
        <StyledNavLink
          to={`/group/${item.shareGroupId}`}
          key={item.shareGroupId}
          onClick={() => setSelectedGroup(item.name)}
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
