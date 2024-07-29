import React from 'react';
import * as S from './Styles';
import ShareGroupTopButton from '../ShareGroupTopButton/ShareGroupTopButton';
import ShareGroupCloudButton from '../ShareGroupCloudButton/ShareGroupCloudButton';
import ShareGroupCarousel from '../ShareGroupCarousel/ShareGroupCarousel';

const ShareGroupFolderView: React.FC = () => {
  const items = [
    <div key={1}>Item 1</div>,
    <div key={2}>Item 2</div>,
    <div key={3}>Item 3</div>,
    <div key={3}>Item 3</div>,
    <div key={3}>Item 3</div>,
    <div key={3}>Item 3</div>,
    <div key={3}>Item 3</div>,
    <div key={3}>Item 3</div>,
  ];
  return (
    <S.Layout>
      <S.TopContainer>
        <ShareGroupTopButton />
      </S.TopContainer>
      <ShareGroupCarousel items={items} />
      <ShareGroupCloudButton />
    </S.Layout>
  );
};

export default ShareGroupFolderView;
