import React from 'react';
import * as S from './Styles';

interface ImageItemProps {
  src: string;
  selected: boolean;
  onClick: () => void;
}

const ShareGroupImageItem: React.FC<ImageItemProps> = ({
  src,
  selected,
  onClick,
}) => {
  return (
    <S.Layout selected={selected} onClick={onClick}>
      <S.Image src={src} alt="image" />
    </S.Layout>
  );
};

export default ShareGroupImageItem;
