import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';
import ShareGroupModal from '../ShareGroupImageModal/ShareGroupImageModal';
import {
  checkModeState,
  isModalState,
  selectedImageState,
} from 'recoil/states/share_group';
import { useRecoilState, useRecoilValue } from 'recoil';
import ShareGroupBottomBar from '../ShareGroupBottomBar/ShareGroupBottomBar';

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
  const [date, setDate] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const isChecked = useRecoilValue(checkModeState);
  const [checkedImg, setCheckedImg] = useState<number[]>([]);

  const handleImageClick = (i: number, id: number) => {
    if (isChecked) {
      if (checkedImg.includes(id)) {
        setCheckedImg((prev) => prev.filter((num) => num !== id));
      } else {
        setCheckedImg((prev) => [...prev, id]);
      }
      return;
    }
    setCheckedImg([]);
    setSelectedImage(items[i].rawPhotoUrl);
    const newDate = items[i].createdAt.split(' ')[0];
    setDate(newDate);
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

  useEffect(() => {
    if (!isChecked) setCheckedImg([]);
  }, [isChecked]);

  return (
    <>
      <S.Layout isModal={isModal}>
        <S.PhotoLayout>
          {items.map((item, i) => (
            <ShareGroupImageItem
              key={item.photoId}
              src={item.rawPhotoUrl}
              selected={false}
              isDownload={item.isDownload}
              onClick={() => handleImageClick(i, item.photoId)}
              checked={checkedImg.includes(item.photoId)}
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
          <ShareGroupModal
            date={date}
            src={selectedImage}
            onClose={handleCloseModal}
          />
          <ShareGroupBottomBar button delButton />
        </>
      )}
    </>
  );
};

export default ShareGroupImageList;
