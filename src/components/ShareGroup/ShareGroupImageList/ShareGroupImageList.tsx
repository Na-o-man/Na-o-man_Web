import React from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';
import ShareGroupModal from '../ShareGroupImageModal/ShareGroupImageModal';
import { isModalState, selectedImageState } from 'recoil/states/share_group';
import { useRecoilState } from 'recoil';
import ShareGroupBottomBar from '../ShareGroupBottomBar/ShareGroupBottomBar';

export interface itemProp {
  createdAt: string;
  isDownload: boolean;
  photoId: number;
  rawPhotoUrl: string;
  w200PhotoUrl: string;
  w400PhotoUrl: string;
}

const ShareGroupImageList = ({ items }: { items: itemProp[] }) => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModal(false);
  };

  return (
    <>
      <S.Layout isModal={isModal}>
        <S.PhotoLayout>
          {items.map((item) => (
            <ShareGroupImageItem
              key={item.photoId}
              src={item.rawPhotoUrl}
              selected={false}
              onClick={() => handleImageClick(item.rawPhotoUrl)}
            />
          ))}
        </S.PhotoLayout>
      </S.Layout>
      {!isModal && <ShareGroupBottomBar />}
      {isModal && selectedImage && (
        <>
          <ShareGroupModal src={selectedImage} onClose={handleCloseModal} />
          <ShareGroupBottomBar button delButton />
        </>
      )}
    </>
  );
};

export default ShareGroupImageList;
