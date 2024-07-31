import ShareGroupFolderView from 'components/ShareGroup/ShareGroupFolderView/ShareGroupFolderView';
import React from 'react';
import * as S from './Styles';

const ShareGroupSelect: React.FC = () => {
  // Your component logic goes here

  return (
    <S.CloudLayout isRightCloud>
      <ShareGroupFolderView />
    </S.CloudLayout>
  );
};

export default ShareGroupSelect;
