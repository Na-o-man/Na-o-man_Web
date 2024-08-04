import React from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';
import ShareGroupModal from '../ShareGroupImageModal/ShareGroupImageModal';
import { isModalState, selectedImageState } from 'recoil/states/share_group';
import { useRecoilState } from 'recoil';
import photo from '../../../assets/samples/photo1.jpg';
import ShareGroupBottomBar from '../ShareGroupBottomBar/ShareGroupBottomBar';

const ShareGroupImageList: React.FC = () => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);

  const items: string[] = [
    photo,
    photo,
    photo,
    photo,
    photo,
    photo,
    photo,
    photo,
    photo,
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
        <S.PhotoLayout>
          {items.map((item, index) => (
            <ShareGroupImageItem
              key={index}
              src={item}
              selected={false}
              onClick={() => handleImageClick(item)}
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
