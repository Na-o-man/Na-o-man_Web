import React from 'react';
import ShareGroupListItem from '../ShareGroupListItem/ShareGroupListItem';
import * as S from './Styles';
import { StyledNavLink } from 'components/Common/DropDown/Styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  selectedGroupName,
  shareGroupListState,
} from 'recoil/states/share_group';

const ShareGruopListView: React.FC = () => {
  const shareGroupList = useRecoilValue(shareGroupListState);
  const setSelectedGroup = useSetRecoilState(selectedGroupName);

  return (
    <S.Layout>
      {shareGroupList.map((item) => (
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
