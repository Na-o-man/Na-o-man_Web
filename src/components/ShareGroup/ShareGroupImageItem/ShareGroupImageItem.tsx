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
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    setIsClicked(isDownload);
  }, [isDownload]);

  return (
    <S.Layout selected={selected} checked={checked} onClick={onClick}>
      <S.ImageBox>
        <S.Image src={src} alt="image" isdownload={isClicked} />
      </S.ImageBox>
    </S.Layout>
  );
};

export default ShareGroupImageItem;
