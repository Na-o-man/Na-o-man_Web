import React from 'react';
import * as S from './Styles';
import { AddBtn, HomeBtn, NotificationBtn } from 'assets/icon';
import ShareGroupRectButton from 'components/ShareGroup/ShareGroupRectButton/ShareGroupRectButton';
import { getHasSamplePhoto } from 'apis/getMembers';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { navigationBtnClick } from 'recoil/states/share_group';
import { redirectPath } from 'recoil/states/enter';

const NavigationBar = () => {
  const [isClicked, setIsClicked] = useRecoilState(navigationBtnClick);
  const navigate = useNavigate();
  const setPath = useSetRecoilState(redirectPath);
  const handleButtonClick = (add?: boolean) => {
    getHasSamplePhoto().then((res) => {
      if (!res) {
        if (add) setPath('/add/member');
        else setPath('/join');
        navigate('/login/profile');
      } else {
        if (add) navigate('add/member');
        else navigate('join');
      }
    });
  };
  const handleMouseLeave = () => {
    setIsClicked(false);
  };
  return (
    <S.Layout>
      <S.IconLayout>
        <HomeBtn
          style={{ width: '1.2rem', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
        <S.AddButtonBox onClick={() => setIsClicked(!isClicked)}>
          <AddBtn />
        </S.AddButtonBox>
        <NotificationBtn
          style={{ width: '1.2rem', cursor: 'pointer' }}
          onClick={() => navigate('/notice')}
        />
      </S.IconLayout>
      {isClicked && (
        <S.RectContainer onMouseLeave={handleMouseLeave}>
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
