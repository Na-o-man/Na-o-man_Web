import React from 'react';
import * as S from './Styles';
import logo from '../../../assets/design/logo/symbol.png';
import imageZipDownloader from 'utils/ImageZipDownloader';
import { getPhotosDownload } from 'apis/getPhotosDownload';
import { useRecoilValue } from 'recoil';
import { shareGroupId } from 'recoil/states/share_group';

interface BottomBarProps {
  symbol?: boolean;
  button?: boolean;
  delButton?: boolean;
  onDelete?: () => void; // 삭제하기 버튼 클릭 시 호출될 함수
  srcs: string[];
  profileId?: number;
  photoList?: number[];
}

const ShareGroupBottomBar: React.FC<BottomBarProps> = ({
  symbol,
  button,
  delButton,
  onDelete,
  srcs,
  photoList,
}) => {
  // 선택한 이미지들의 URL을 다운로드함
  const imageUrls: string[] = srcs;
  const groupId = useRecoilValue(shareGroupId);

  const handleDownload = async (): Promise<void> => {
    console.log(photoList);
    if (groupId && srcs && photoList && !photoList?.includes(0)) {
      try {
        const response = await getPhotosDownload(groupId, photoList);
        console.log(response);
        if (response.status === 200) {
          await imageZipDownloader(imageUrls);
          alert('다운로드가 완료되었습니다.');
        }
      } catch (error) {
        console.log(error);
        alert('다운로드 중 오류가 발생했습니다.');
      }
    }
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
        <S.FilledCloudButtonContainer onClick={onDelete}>
          <S.FilledCloudButtonText>삭제하기</S.FilledCloudButtonText>
          <S.FilledCloudButton />
        </S.FilledCloudButtonContainer>
      )}
    </S.Layout>
  );
};

export default ShareGroupBottomBar;
