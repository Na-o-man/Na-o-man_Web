import React from 'react';
import * as S from './Styles';
import ShareGroupTopButton from '../ShareGroupTopButton/ShareGroupTopButton';
import ShareGroupCloudButton from '../ShareGroupCloudButton/ShareGroupCloudButton';
import ShareGroupCarousel from '../ShareGroupCarousel/ShareGroupCarousel';
import { useRecoilState } from 'recoil';
import { shareGroupMemberListState } from 'recoil/states/share_group';

const ShareGroupFolderView: React.FC = () => {
  const [items] = useRecoilState(shareGroupMemberListState);
  return (
    <S.Layout>
      <S.TopContainer>
        <ShareGroupTopButton />
      </S.TopContainer>
      <ShareGroupCarousel items={items || []} />
      <ShareGroupCloudButton />
    </S.Layout>
  );
};

export default ShareGroupFolderView;
