import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from './DropDown';
import ShareGroupImageList, {
  itemProp,
} from 'components/ShareGroup/ShareGroupImageList/ShareGroupImageList';
import { useLocation } from 'react-router-dom';
import Loading from 'components/Loading/Loading';
import { getPhotosAll, getPhotosEtc } from 'apis/getPhotosAll';
import { getPhotos } from 'apis/getPhotos';

const ShareGroupDetailPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const reqData = {
    shareGroupId: location.state.shareGroupId,
    profileId: location.state.profileId,
    size: 20,
  };
  const isAllPhoto = location.state.isAllPhoto;
  const isEtcPhoto = location.state.isEtcPhoto;
  const [requestData, setRequestData] = useState({
    shareGroupId: location.state.shareGroupId,
    profileId: location.state.profileId,
  });
  const [items, setItems] = useState<itemProp[]>([]);
  const [maxPage, setMaxPage] = useState(1);
  const names = [];
  names.push(`${location.state.name}`);

  const handleApi = async (page: number): Promise<void> => {
    // page가 있으면 page를 넣어줌
    const reqDataWithPage = {
      ...reqData,
      page: page,
    };
    console.log(reqDataWithPage);
    if (isAllPhoto) {
      const { status, data } = await getPhotosAll(reqDataWithPage);
      if (status === 200) {
        setItems(data.photoInfoList);
        setMaxPage(data.totalPages);
      }
    } else if (isEtcPhoto) {
      const { status, data } = await getPhotosEtc(reqDataWithPage);
      if (status === 200) {
        setItems(data.photoInfoList);
        setMaxPage(data.totalPages);
      }
    } else {
      const { status, data } = await getPhotos(
        page > 1 ? reqDataWithPage : reqData,
      );
      if (status === 200) {
        console.log(data);
        setItems(data.photoInfoList);
        setMaxPage(data.totalPages);
      }
    }
    if (page === 1) {
      setIsLoading(false);
    }
  };

  const getApi = async (page?: number): Promise<void> => {
    if (typeof page === 'undefined') {
      setIsLoading(true);
    }
    await handleApi(page || 1);
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
          <DropDown
            groupId={location.state.shareGroupId}
            setter={setRequestData}
          />
          <DropDown
            groupId={location.state.shareGroupId}
            setter={setRequestData}
          />
        </S.DropDownContainer>
      </S.TopRectContainer>
      <Header backarrow checkbtn />
      <ShareGroupImageList
        items={items}
        maxPage={maxPage}
        getApi={getApi}
        shareGroupId={location.state.shareGroupId}
      />
    </S.Layout>
  );
};

export default ShareGroupDetailPage;
