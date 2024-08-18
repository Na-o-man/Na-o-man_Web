import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';
import ShareGroupModal from '../ShareGroupImageModal/ShareGroupImageModal';
import { isModalState, selectedImageState } from 'recoil/states/share_group';
import { useRecoilState } from 'recoil';
import ShareGroupBottomBar from '../ShareGroupBottomBar/ShareGroupBottomBar';
import { useLocation } from 'react-router-dom';
import { deletePhoto } from 'apis/deletePhoto';

export interface itemProp {
  createdAt: string;
  isDownload: boolean;
  photoId: number;
  rawPhotoUrl: string;
  w200PhotoUrl: string;
  w400PhotoUrl: string;
}

const ShareGroupImageList = ({
  items,
  maxPage,
  getApi,
  shareGroupId,
}: {
  items: itemProp[];
  maxPage: number;
  getApi: (page: number) => Promise<void>;
  shareGroupId: number; // Add shareGroupId as a prop
}) => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const [page, setPage] = useState<number>(1);
  const [localItems, setLocalItems] = useState<itemProp[]>(items);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModal(false);
  };

  const handleNext = async () => {
    if (page >= maxPage) return;

    setPage((prev) => {
      const nextPage = prev + 1;
      // Call getApi with the updated page inside the setState callback
      getApi(nextPage);
      return nextPage;
    });
  };

  const handlePrev = async () => {
    if (page <= 1) return;

    setPage((prev) => {
      const prevPage = prev - 1;
      // Call getApi with the updated page inside the setState callback
      getApi(prevPage);
      return prevPage;
    });
  };

  // 사진 삭제
  const handleDelete = async () => {
    if (selectedImage) {
      try {
        const photoToDelete = localItems.find(
          (item) => item.rawPhotoUrl === selectedImage,
        );
        if (photoToDelete) {
          await deletePhoto(shareGroupId, [photoToDelete.photoId]);
          setLocalItems((prevItems) =>
            prevItems.filter((item) => item.rawPhotoUrl !== selectedImage),
          );
        }
      } catch (error) {
        console.error('Failed to delete photo:', error);
      } finally {
        setSelectedImage(null);
        setIsModal(false);
      }
    }
  };
  return (
    <>
      <S.Layout isModal={isModal}>
        <S.PhotoLayout>
          {localItems.map((item) => (
            <ShareGroupImageItem
              key={item.photoId}
              src={item.rawPhotoUrl}
              selected={false}
              onClick={() => handleImageClick(item.rawPhotoUrl)}
            />
          ))}
        </S.PhotoLayout>
      </S.Layout>
      <S.PageContainer>
        <S.PageBtn onClick={handlePrev}>◀</S.PageBtn>
        <S.Page>{page + ' / ' + maxPage}</S.Page>
        <S.PageBtn onClick={handleNext}>▶</S.PageBtn>
      </S.PageContainer>
      {!isModal && <ShareGroupBottomBar />}
      {isModal && selectedImage && (
        <>
          <ShareGroupModal src={selectedImage} onClose={handleCloseModal} />
          <ShareGroupBottomBar button delButton onDelete={handleDelete} />
        </>
      )}
    </>
  );
};

export default ShareGroupImageList;
