import React, { useEffect, useRef, useState } from 'react';
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
import { deletePhoto } from 'apis/deletePhoto';
import { useNavigate } from 'react-router-dom';
import { getPhotos, getPhotosAll, getPhotosEtc } from 'apis/getPhotos';
import {
  addedAgendaPhotos,
  addedAgendaSrcs,
  choiceMode,
} from 'recoil/states/vote';

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
  profileId,
  shareGroupId,
  loading,
  setLoading,
}: {
  items: itemProp[];
  maxPage: number;
  profileId: number;
  shareGroupId: number; // Add shareGroupId as a prop
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  // infinite scroll loading을 위한 state
}) => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const [imgId, setImgId] = useState<number>(0);
  const [date, setDate] = useState<string>();
  // infinite scroll을 위한 state
  const [page, setPage] = useState<number>(0);
  const [localItems, setLocalItems] = useState<itemProp[]>(items);
  const [isChecked, setIsChecked] = useRecoilState(checkModeState);
  const [checkedImg, setCheckedImg] = useState<number[]>([]);
  const [srcs, setSrcs] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  // 사진 칸 observer
  const containerRef = useRef<HTMLDivElement>(null);
  const mode: boolean = useRecoilValue(choiceMode);
  const nav = useNavigate();
  const [photos, setPhotos] = useRecoilState(addedAgendaPhotos);
  const [sources, setSources] = useRecoilState(addedAgendaSrcs);

  const handleImageClick = (i: number, id: number, src: string) => {
    if (isChecked) {
      if (checkedImg.includes(id)) {
        setCheckedImg((prev) => prev.filter((num) => num !== id));
        setSrcs((prev) => prev.filter((s) => s !== src));
      } else {
        setCheckedImg((prev) => [...prev, id]);
        setSrcs((prev) => [...prev, src]);
      }
      const newPhotos = [
        ...photos,
        ...srcs.filter((src) => !photos.includes(src)),
      ];
      const newSourcs = [
        ...sources,
        ...checkedImg.filter((id) => !sources.includes(id)),
      ];
      if (mode && newPhotos.length > 6) {
        alert('사진의 최대 등록 개수는 6장입니다');
        nav(-1);
        return;
      }
      setPhotos(newPhotos);
      setSources(newSourcs);
      return;
    }
    setCheckedImg([]);
    console.log(localItems[i].rawPhotoUrl);
    setSelectedImage(localItems[i].rawPhotoUrl);
    setImgId(localItems[i].photoId);
    const newDate = localItems[i].createdAt.split(' ')[0];
    setDate(newDate);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setImgId(0);
    setIsModal(false);
  };

  // 사진 삭제
  const handleDelete = async () => {
    let photoToDelete: number[] = [];

    if (selectedImage) {
      const id = localItems.find(
        (item) => item.rawPhotoUrl === selectedImage,
      )?.photoId;
      if (id) photoToDelete.push(id);
    } else if (checkedImg.length > 0) {
      photoToDelete = Array.from(new Set(checkedImg)); // 중복 제거
    }

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
        setImgId(0);
        setIsChecked(false);
        setIsModal(false);
      }
    }
  };

  useEffect(() => {
    if (mode) setIsChecked(true);
    if (!isChecked) setCheckedImg([]);
  }, [isChecked]);

  // 사진 불러오기 API 호출 함수
  const handleApi = async (
    page: number,
    profileId: number,
    shareGroupId: number,
  ): Promise<itemProp[]> => {
    // page가 있으면 page를 넣어줌
    const reqDataWithPage = {
      shareGroupId: shareGroupId,
      profileId: profileId,
      size: 20,
      page: page,
    };
    setLoading(true);
    console.log(reqDataWithPage);

    try {
      if (profileId === 0) {
        const { status, data } = await getPhotosAll(reqDataWithPage);
        if (status === 200) {
          setLoading(false);
          return data.photoInfoList;
        }
      } else if (profileId === -1) {
        const { status, data } = await getPhotosEtc(reqDataWithPage);
        if (status === 200) {
          setLoading(false);
          return data.photoInfoList;
        }
      } else {
        const { status, data } = await getPhotos(reqDataWithPage);
        if (status === 200) {
          setLoading(false);
          return data.photoInfoList;
        }
      }
      return [];
    } catch (e) {
      alert('앨범 조회 중 오류가 발생하였습니다');
      console.error('Failed to fetch more items:', e);
      return [];
    }
  };

  const fetchData = async (page: number): Promise<void> => {
    if (page > maxPage) {
      setHasMore(false);
      return;
    }

    if (profileId === undefined) return;

    const newItems = await handleApi(page, profileId, shareGroupId);
    setLocalItems((prevItems) => {
      const uniqueItems = newItems.filter(
        (newItem) =>
          !prevItems.some((item) => item.photoId === newItem.photoId),
      );
      return [...prevItems, ...uniqueItems];
    });
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    console.log('scroll event handler', loading, hasMore);
    const element = containerRef.current;
    if (
      element &&
      element.scrollTop + element.clientHeight >= element.scrollHeight &&
      !loading &&
      hasMore
    ) {
      console.log('fetch more items');
      setPage((prevPage) => prevPage + 1);
    }
  };

  // 페이지가 변경될 때마다 API 호출
  useEffect(() => {
    if (localItems.length <= 19) return;
    fetchData(page);
  }, [page]);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      console.log('scroll event listener added');
    }
    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
        console.log('scroll event listener removed');
      }
    };
  }, [loading, hasMore]);

  return (
    <>
      <S.Layout isModal={isModal} ref={containerRef}>
        <S.PhotoLayout>
          {localItems.map((item, i) => (
            <ShareGroupImageItem
              key={item.photoId}
              src={item.rawPhotoUrl}
              selected={false}
              isDownload={item.isDownload}
              onClick={() =>
                handleImageClick(i, item.photoId, item.rawPhotoUrl)
              }
              checked={checkedImg.includes(item.photoId)}
            />
          ))}
        </S.PhotoLayout>
      </S.Layout>
      {mode ? (
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
            profileId={profileId}
            button
            delButton
            onDelete={handleDelete}
            srcs={[selectedImage]}
            photoList={[imgId]}
          />
        </>
      ) : checkedImg.length > 0 ? (
        <ShareGroupBottomBar
          profileId={profileId}
          button
          delButton
          onDelete={handleDelete}
          srcs={srcs}
          photoList={checkedImg}
        />
      ) : (
        <ShareGroupBottomBar symbol srcs={srcs} profileId={profileId} />
      )}
    </>
  );
};

export default ShareGroupImageList;
