import React from 'react';
import * as S from './Styles';

interface ImageItemProps {
  src: string;
  selected: boolean;
}

const ShareGroupImageItem: React.FC<ImageItemProps> = ({ src, selected }) => {
  return (
    <S.Layout selected={selected}>
      <S.Image src={src} alt="image" />
    </S.Layout>
  );
};

export default ShareGroupImageItem;
