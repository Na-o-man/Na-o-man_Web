import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from 'components/Common/DropDown/DropDown';
import ShareGroupImageList, {
  itemProp,
} from 'components/ShareGroup/ShareGroupImageList/ShareGroupImageList';
import logo from 'assets/design/logo/symbol.png';
import { useLocation } from 'react-router-dom';
import { getProfileImage } from 'apis/getProfileImage';

const ShareGroupDetailPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const requestData = {
    shareGroupId: location.state.shareGroupId,
    profileId: location.state.profileId,
  };
  const [items, setItems] = useState<itemProp[]>([]);
  const names = [];
  names.push(`${location.state.name}`);

  const getApi = async () => {
    setIsLoading(true);
    const { status, data } = await getProfileImage(requestData);
    if (status === 200) {
      setIsLoading(false);
      setItems(data.photoInfoList);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  if (isLoading) {
    return (
      <S.CloudLayout>
        <S.LoadingContainer>
          <S.LoadingLogo src={logo} alt="logo" width="60px" height="60px" />
          <S.LoadingText>사진 분류 중입니다...</S.LoadingText>
        </S.LoadingContainer>
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
