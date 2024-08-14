import React from 'react';
import * as S from './Styles';
import { useNavigate, useParams } from 'react-router-dom';
import defaultProfile from '../../../assets/samples/emptyProfile.png';

interface CarouselItemProps {
  profileId?: number;
  active: boolean;
  profileImage?: string;
  name?: string;
}

const ShareGroupCarouselItem: React.FC<CarouselItemProps> = ({
  profileId,
  active,
  profileImage,
  name,
}) => {
  const navigatte = useNavigate();
  const { id } = useParams();
  return (
    <S.Layout
      active={active}
      onClick={() =>
        navigatte(`/group/detail`, {
          state: {
            shareGroupId: id,
            profileId: profileId,
            profileImage: profileImage,
          },
        })
      }
    >
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
