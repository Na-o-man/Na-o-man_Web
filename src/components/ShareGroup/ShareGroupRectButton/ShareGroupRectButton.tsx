import React from 'react';
import * as S from './Styles';

interface ShareGroupRectButtonProps {
  add?: boolean;
}

const ShareGroupRectButton: React.FC<ShareGroupRectButtonProps> = ({ add }) => {
  const rectText = add ? '공유 그룹 추가' : '공유 그룹 입장';

  return (
    <S.Layout>
      <S.Rect />
      <S.RectText>{rectText}</S.RectText>
    </S.Layout>
  );
};

export default ShareGroupRectButton;
