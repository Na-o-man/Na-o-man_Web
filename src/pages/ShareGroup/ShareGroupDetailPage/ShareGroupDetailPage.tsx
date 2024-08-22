import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from './DropDown';
import ShareGroupImageList, {
  itemProp,
} from 'components/ShareGroup/ShareGroupImageList/ShareGroupImageList';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import { getPhotosAll, getPhotosEtc } from 'apis/getPhotosAll';
import { getPhotos } from 'apis/getPhotos';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  photoRequestState,
  photoTypeState,
  shareGroupId,
} from 'recoil/states/share_group';

const ShareGroupDetailPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const mode = location.state.choiceMode;
  const groupId = useRecoilValue(shareGroupId);
  const [requestData, setRequestData] = useRecoilState(photoRequestState);
  const requestType = useRecoilValue(photoTypeState);
  const [items, setItems] = useState<itemProp[]>([]);
  const [maxPage, setMaxPage] = useState(0);
  // infinite scroll을 위한 state
  const [loading, setLoading] = useState<boolean>(false);

  const handleApi = async (page: number): Promise<void> => {
    // page가 있으면 page를 넣어줌
    const reqDataWithPage = { ...requestData, page: page };
    try {
      if (requestType === 'all') {
        const { status, data } = await getPhotosAll(reqDataWithPage);
        if (status === 200) {
          setItems(data.photoInfoList);
          setMaxPage(data.totalPages);
        }
      } else if (requestType === 'etc') {
        const { status, data } = await getPhotosEtc(reqDataWithPage);
        if (status === 200) {
          setItems(data.photoInfoList);
          setMaxPage(data.totalPages);
        }
      } else {
        const { status, data } = await getPhotos(
          page > 0 ? reqDataWithPage : requestData,
        );
        if (status === 200) {
          setItems(data.photoInfoList);
          setMaxPage(data.totalPages);
        }
      }
      if (page === 0) {
        setIsLoading(false);
      }
    } catch (e) {
      alert('앨범 조회 중 오류가 발생하였습니다');
      if (mode) {
        nav(-1);
      } else {
        nav(`/group/${groupId}`);
      }
    }
  };

  const getApi = async (page?: number): Promise<void> => {
    if (typeof page === 'undefined') {
      setIsLoading(true);
    }
    setLoading(true);
    await handleApi(page || 0);
    setLoading(false);
  };

  useEffect(() => {
    getApi();
  }, [requestData]);

  if (isLoading) {
    return (
      <S.CloudLayout>
        <Loading />
      </S.CloudLayout>
    );
  }
  return (
    <S.Layout>
      <S.TopRectContainer>
        <S.TopRect />
        <S.DropDownContainer>
          <DropDown groupId={groupId} />
        </S.DropDownContainer>
      </S.TopRectContainer>
      <Header backarrow checkbtn />
      <ShareGroupImageList
        items={items}
        maxPage={maxPage}
        getApi={getApi}
        shareGroupId={groupId}
        loading={loading}
        setLoading={setLoading}
      />
    </S.Layout>
  );
};

export default ShareGroupDetailPage;
