import React, { useState } from 'react';
import * as S from './Styles';
import { AddBtn, HomeBtn, NotificationBtn } from 'assets/icon';
import ShareGroupRectButton from 'components/ShareGroup/ShareGroupRectButton/ShareGroupRectButton';
import { getHasSamplePhoto } from 'apis/getMembers';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = (add?: boolean) => {
    getHasSamplePhoto().then((res) => {
      if (!res) navigate('/login/profile');
      else {
        if (add) navigate('add/member');
        else navigate('join');
      }
    });
  };
  return (
    <S.Layout>
      <S.IconLayout>
        <HomeBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
        <S.AddButtonBox onClick={() => setIsClicked(!isClicked)}>
          <AddBtn />
        </S.AddButtonBox>
        <NotificationBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
      </S.IconLayout>
      {isClicked && (
        <S.RectContainer>
          <S.RectBox onClick={() => handleButtonClick(false)}>
            <ShareGroupRectButton />
          </S.RectBox>
          <S.RectBox onClick={() => handleButtonClick(true)}>
            <ShareGroupRectButton add />
          </S.RectBox>
        </S.RectContainer>
      )}
    </S.Layout>
  );
};

export default NavigationBar;
