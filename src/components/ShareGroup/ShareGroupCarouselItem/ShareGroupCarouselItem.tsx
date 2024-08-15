import React from 'react';
import * as S from './Styles';
import { useNavigate, useParams } from 'react-router-dom';
import defaultProfile from '../../../assets/samples/emptyProfile.png';
import { useSetRecoilState } from 'recoil';
import { dropDownTitle } from 'recoil/states/share_group';

interface CarouselItemProps {
  profileId?: number;
  active: boolean;
  profileImage?: string;
  name: string;
  isAllPhoto?: boolean;
  isEtcPhoto?: boolean;
}

const ShareGroupCarouselItem: React.FC<CarouselItemProps> = ({
  profileId,
  active,
  profileImage,
  name,
  isAllPhoto,
  isEtcPhoto,
}) => {
  const navigatte = useNavigate();
  const { id } = useParams();
  const setTitle = useSetRecoilState(dropDownTitle);

  const handleClickItem = () => {
    setTitle(name);
    navigatte(`/group/detail`, {
      state: {
        shareGroupId: id,
        profileId: profileId,
        profileImage: profileImage,
        name: name,
        isAllPhoto: isAllPhoto,
        isEtcPhoto: isEtcPhoto,
      },
    });
  };
  return (
    <S.Layout active={active} onClick={handleClickItem}>
      <S.SvgContainer>
        <S.Folder />
        <S.ContentBox>
          {profileImage ? (
            <S.Img src={profileImage} />
          ) : (
            <S.Img src={defaultProfile} />
          )}
          <S.Name>{name}</S.Name>
        </S.ContentBox>
      </S.SvgContainer>
    </S.Layout>
  );
};

export default React.memo(ShareGroupCarouselItem);
