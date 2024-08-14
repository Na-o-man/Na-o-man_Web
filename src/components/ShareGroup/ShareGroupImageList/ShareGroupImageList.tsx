import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';
import ShareGroupModal from '../ShareGroupImageModal/ShareGroupImageModal';
import { isModalState, selectedImageState } from 'recoil/states/share_group';
import { useRecoilState } from 'recoil';
import ShareGroupBottomBar from '../ShareGroupBottomBar/ShareGroupBottomBar';
import { useLocation } from 'react-router-dom';

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
}: {
  items: itemProp[];
  maxPage: number;
  getApi: (page: number) => Promise<void>;
}) => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const [page, setPage] = useState<number>(1);

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
      <S.PageContainer>
        <S.PageBtn onClick={handlePrev}>◀</S.PageBtn>
        <S.Page>{page + ' / ' + maxPage}</S.Page>
        <S.PageBtn onClick={handleNext}>▶</S.PageBtn>
      </S.PageContainer>
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
