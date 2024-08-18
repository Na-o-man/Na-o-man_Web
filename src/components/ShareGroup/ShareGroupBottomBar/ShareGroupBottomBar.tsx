import React from 'react';
import * as S from './Styles';
import logo from '../../../assets/design/logo/symbol.png';

interface BottomBarProps {
  button?: boolean;
  delButton?: boolean;
  onDelete?: () => void; // 삭제하기 버튼 클릭 시 호출될 함수
}

const ShareGroupBottomBar: React.FC<BottomBarProps> = ({
  button,
  delButton,
  onDelete,
}) => {
  return (
    <S.Layout>
      <S.BottomBar />
      {button || <S.Symbol src={logo} alt="logo" />}
      {button && (
        <S.FilledCloudButtonContainer>
          <S.FilledCloudButtonText>다운받기</S.FilledCloudButtonText>
          <S.FilledCloudButton />
        </S.FilledCloudButtonContainer>
      )}
      {delButton && (
        <S.FilledCloudButtonContainer>
          <S.FilledCloudButtonText onClick={onDelete}>
            삭제하기
          </S.FilledCloudButtonText>
          <S.FilledCloudButton />
        </S.FilledCloudButtonContainer>
      )}
    </S.Layout>
  );
};

export default ShareGroupBottomBar;
