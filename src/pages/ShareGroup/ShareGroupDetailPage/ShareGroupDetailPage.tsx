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
  const isAllPhoto = location.state.isAllPhoto;
  const isEtcPhoto = location.state.isEtcPhoto;
  const [requestData, setRequestData] = useState({
    shareGroupId: location.state.shareGroupId,
    profileId: location.state.profileId,
  });
  const [items, setItems] = useState<itemProp[]>([]);

  const getApi = async () => {
    setIsLoading(true);
    if (isAllPhoto) {
      const newRequestData = { ...requestData, size: 20 };
      const { status, data } = await getPhotosAll(newRequestData);
      if (status === 200) {
        setIsLoading(false);
        setItems(data.photoInfoList);
      }
    } else if (isEtcPhoto) {
      const newRequestData = { ...requestData, size: 20 };
      const { status, data } = await getPhotosEtc(newRequestData);
      if (status === 200) {
        setIsLoading(false);
        setItems(data.photoInfoList);
      }
    } else {
      const { status, data } = await getPhotos(requestData);
      if (status === 200) {
        setIsLoading(false);
        setItems(data.photoInfoList);
      }
    }
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
        </S.DropDownContainer>
      </S.TopRectContainer>
      <Header backarrow checkbtn />
      <ShareGroupImageList items={items} />
    </S.Layout>
  );
};

export default ShareGroupDetailPage;
