import React from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';
import ShareGroupModal from '../ShareGroupImageModal/ShareGroupImageModal';
import { isModalState, selectedImageState } from 'recoil/states/share_group';
import { useRecoilState } from 'recoil';

const ShareGroupImageList: React.FC = () => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);

  const items: string[] = [
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
    'https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b',
  ];

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
        {items.map((item, index) => (
          <ShareGroupImageItem
            key={index}
            src={item}
            selected={false}
            onClick={() => handleImageClick(item)}
          />
        ))}
      </S.Layout>

      {isModal && selectedImage && (
        <ShareGroupModal src={selectedImage} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ShareGroupImageList;
