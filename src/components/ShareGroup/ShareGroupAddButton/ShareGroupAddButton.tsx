import React from 'react';
import * as S from './Styles';

interface ShareGroupAddButtonProps {
  onClick?: () => void;
}

const ShareGroupAddButton: React.FC<ShareGroupAddButtonProps> = ({
  onClick,
}) => {
  return (
    <S.Layout>
      <S.MiddleRectangle />
      <S.MiddleContainer>
        <S.Text>아직 공유 그룹이 없어요.</S.Text>
        <S.Text>그룹을 추가해주세요.</S.Text>
        <S.AddGroupBtnContainer onClick={onClick}>
          <S.AddGroupBtn />
          <S.AddGroupBtnText>공유 그룹 추가하기</S.AddGroupBtnText>
        </S.AddGroupBtnContainer>
      </S.MiddleContainer>
      <S.Cloud />
    </S.Layout>
  );
};

export default ShareGroupAddButton;
