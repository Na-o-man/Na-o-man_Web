import React from 'react';
import * as S from './Styles';
import { AddBtn, HomeBtn, NotificationBtn } from 'assets/icon';

const NavigationBar = () => {
  return (
    <S.Layout>
      <S.IconLayout>
        <HomeBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
        <S.AddButtonBox>
          <AddBtn />
        </S.AddButtonBox>
        <NotificationBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
      </S.IconLayout>
    </S.Layout>
  );
};

export default NavigationBar;
