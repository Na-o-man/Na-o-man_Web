import React from 'react';
import * as S from './Styles';
import ShareGroupRectButton from '../ShareGroupRectButton/ShareGroupRectButton';
import { StyledNavLink } from 'components/Common/DropDown/Styles';

interface ShareGroupAddButtonProps {
  showButton: boolean;
  onClick?: () => void;
}

const ShareGroupAddButton: React.FC<ShareGroupAddButtonProps> = ({
  showButton,
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
      {showButton && (
        <S.RectContainer>
          <StyledNavLink to="/join_group">
            <ShareGroupRectButton />
          </StyledNavLink>
          <StyledNavLink to="/addCount/headCount">
            <ShareGroupRectButton add />
          </StyledNavLink>
        </S.RectContainer>
      )}
    </S.Layout>
  );
};

export default ShareGroupAddButton;
