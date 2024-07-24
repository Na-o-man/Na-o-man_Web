import React from 'react';
import * as S from './Styles';
import { AddBtn, HomeBtn, NotificationBtn } from 'assets/icon';

const NavigationBar = () => {
  return (
    <S.Layout>
      <S.IconLayout>
        <HomeBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
        <AddBtn style={{ width: '1.4rem', cursor: 'pointer' }} />
        <NotificationBtn style={{ width: '1.2rem', cursor: 'pointer' }} />
      </S.IconLayout>
    </S.Layout>
  );
};

export default NavigationBar;
