import React from 'react';
import * as S from './Styles';

interface ImageItemProps {
  src: string;
  selected: boolean;
  isDownload: boolean;
  onClick: () => void;
  checked: boolean;
}

const ShareGroupImageItem: React.FC<ImageItemProps> = ({
  src,
  selected,
  isDownload,
  onClick,
  checked,
}) => {
  return (
    <S.Layout selected={selected} checked={checked} onClick={onClick}>
      <S.ImageBox>
        <S.Image src={src} alt="image" isdownload={isDownload} />
      </S.ImageBox>
    </S.Layout>
  );
};

export default ShareGroupImageItem;
