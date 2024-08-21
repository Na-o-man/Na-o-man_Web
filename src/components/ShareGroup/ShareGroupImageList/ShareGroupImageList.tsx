import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { check } from 'prettier';

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
  // infinite scroll을 위한 state
  const [page, setPage] = useState<number>(0);
  const [localItems, setLocalItems] = useState<itemProp[]>(items);
  const [isChecked, setIsChecked] = useRecoilState(checkModeState);
  const [checkedImg, setCheckedImg] = useState<number[]>([]);
  const [srcs, setSrcs] = useState<string[]>([]);
  // infinite scroll loading을 위한 state
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  // 사진 칸 observer
  const observer = useRef<IntersectionObserver | null>(null);
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
    setSelectedImage(localItems[i].w400PhotoUrl);
    const newDate = localItems[i].createdAt.split(' ')[0];
    setDate(newDate);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModal(false);
  };

  const fetchItems = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    if (page > maxPage) {
      setHasMore(false);
      setLoading(false);
      return;
    }
    await getApi(page + 1);
    setPage((prev) => prev + 1);
    setLoading(false);
  }, [page, loading, hasMore]);

  // infinite scroll의 다음 아이템을 가져올지 결정하는 함수
  // 마지막 아이템이 뷰포트에 들어오면 fetchItems 함수를 호출
  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchItems();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, fetchItems],
  );

  // 사진 삭제
  const handleDelete = async () => {
    let photoToDelete: number[] = [];
    if (selectedImage) {
      const id = localItems.find(
        (item) => item.w400PhotoUrl === selectedImage,
      )?.photoId;
      if (id) photoToDelete.push(id);
    } else if (checkedImg) photoToDelete = checkedImg;
    if (photoToDelete.length > 0) {
      try {
        await deletePhoto(shareGroupId, photoToDelete);
        setLocalItems((prevItems) =>
          prevItems.filter((item) => !photoToDelete.includes(item.photoId)),
        );
      } catch (error) {
        alert('사진 삭제에 실패했습니다. 다시 시도해주세요');
        console.error('Failed to delete photo:', error);
      } finally {
        setSelectedImage(null);
        setIsChecked(false);
        setIsModal(false);
      }
    }
  };

  useEffect(() => {
    if (choiceMode) setIsChecked(true);
    if (!isChecked) setCheckedImg([]);
  }, [isChecked]);

  // infinite scroll을 위한 useEffect
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <>
      <S.Layout isModal={isModal} ref={lastItemRef}>
        <S.PhotoLayout>
          {localItems.map((item, i) => (
            <ShareGroupImageItem
              key={item.photoId}
              src={item.w200PhotoUrl}
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
      {choiceMode ? (
        <>
          <ShareGroupBottomBar srcs={srcs} />
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
          <ShareGroupBottomBar
            button
            delButton
            onDelete={handleDelete}
            srcs={srcs}
          />
        </>
      ) : checkedImg.length > 0 ? (
        <ShareGroupBottomBar
          button
          delButton
          onDelete={handleDelete}
          srcs={srcs}
        />
      ) : (
        <ShareGroupBottomBar symbol srcs={srcs} />
      )}
    </>
  );
};

export default ShareGroupImageList;
