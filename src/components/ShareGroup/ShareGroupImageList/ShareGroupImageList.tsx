import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';
import ShareGroupModal from '../ShareGroupImageModal/ShareGroupImageModal';
import {
  checkModeState,
  isModalState,
  selectedImageState,
} from 'recoil/states/share_group';
import { useRecoilState } from 'recoil';
import ShareGroupBottomBar from '../ShareGroupBottomBar/ShareGroupBottomBar';
import { deletePhoto } from 'apis/deletePhoto';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const { state } = useLocation();
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const [date, setDate] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [localItems, setLocalItems] = useState<itemProp[]>(items);
  const [isChecked, setIsChecked] = useRecoilState(checkModeState);
  const [checkedImg, setCheckedImg] = useState<number[]>([]);
  const [srcs, setSrcs] = useState<string[]>([]);
  const choiceMode = state.choiceMode;
  const nav = useNavigate();

  const handleImageClick = (i: number, id: number, src: string) => {
    if (isChecked) {
      if (checkedImg.includes(id)) {
        setCheckedImg((prev) => prev.filter((num) => num !== id));
        setSrcs((prev) => prev.filter((s) => s !== src));
      } else {
        setCheckedImg((prev) => [...prev, id]);
        setSrcs((prev) => [...prev, src]);
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

  useEffect(() => {
    if (choiceMode) setIsChecked(true);
    if (!isChecked) setCheckedImg([]);
  }, [isChecked]);

  return (
    <>
      <S.Layout isModal={isModal}>
        <S.PhotoLayout>
          {localItems.map((item, i) => (
            <ShareGroupImageItem
              key={item.photoId}
              src={item.rawPhotoUrl}
              selected={false}
              isDownload={item.isDownload}
              onClick={() =>
                handleImageClick(i, item.photoId, item.w200PhotoUrl)
              }
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
      {choiceMode ? (
        <>
          <ShareGroupBottomBar />
          {checkedImg.length > 0 ? (
            <S.CloudButtonContainer
              onClick={() => {
                nav('/vote/create', {
                  state: { photos: checkedImg, srcs: srcs },
                });
              }}
            >
              <S.CloudButtonText>사진 추가</S.CloudButtonText>
              <S.CloudButton />
            </S.CloudButtonContainer>
          ) : (
            <S.TextLayout>안건에 올릴 사진을 선택해주세요.</S.TextLayout>
          )}
        </>
      ) : isModal && selectedImage ? (
        <>
          <ShareGroupModal
            date={date}
            src={selectedImage}
            onClose={handleCloseModal}
          />
          <ShareGroupBottomBar button delButton onDelete={handleDelete} />
        </>
      ) : (
        <ShareGroupBottomBar symbol />
      )}
    </>
  );
};

export default ShareGroupImageList;
