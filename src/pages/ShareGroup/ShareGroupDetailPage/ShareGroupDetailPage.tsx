import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from 'components/Common/DropDown/DropDown';
import ShareGroupImageList, {
  itemProp,
} from 'components/ShareGroup/ShareGroupImageList/ShareGroupImageList';
import { useLocation } from 'react-router-dom';
import { getProfileImage } from 'apis/getProfileImage';
import Loading from 'components/Loading/Loading';
import { getPhotosAll, getPhotosEtc } from 'apis/getPhotosAll';

const ShareGroupDetailPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const requestData = {
    shareGroupId: location.state.shareGroupId,
    profileId: location.state.profileId,
  };
  const isAllPhoto = location.state.isAllPhoto;
  const isEtcPhoto = location.state.isEtcPhoto;
  const [items, setItems] = useState<itemProp[]>([]);
  const names = [];
  names.push(`${location.state.name}`);

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
      const { status, data } = await getProfileImage(requestData);
      if (status === 200) {
        setIsLoading(false);
        setItems(data.photoInfoList);
      }
    }
  };

  useEffect(() => {
    getApi();
  }, []);

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
          <DropDown noIndexTag dataList={names} />
        </S.DropDownContainer>
      </S.TopRectContainer>
      <Header backarrow checkbtn />
      <ShareGroupImageList items={items} />
    </S.Layout>
  );
};

export default ShareGroupDetailPage;
