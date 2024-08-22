import React from 'react';
import * as S from './Styles';
import logo from '../../../assets/design/logo/symbol.png';
import imageZipDownloader from 'utils/ImageZipDownloader';

interface BottomBarProps {
  symbol?: boolean;
  button?: boolean;
  delButton?: boolean;
  onDelete?: () => void; // 삭제하기 버튼 클릭 시 호출될 함수
  srcs: string[];
}

const ShareGroupBottomBar: React.FC<BottomBarProps> = ({
  symbol,
  button,
  delButton,
  onDelete,
  srcs,
}) => {
  // 선택한 이미지들의 URL을 다운로드함
  const imageUrls: string[] = srcs;
  const handleDownload = async (): Promise<void> => {
    await imageZipDownloader(imageUrls);
  };
  return (
    <S.Layout>
      <S.BottomBar />
      {symbol && <S.Symbol src={logo} alt="logo" />}
      {button && (
        <S.FilledCloudButtonContainer onClick={handleDownload}>
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
