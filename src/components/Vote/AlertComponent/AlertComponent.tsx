import React from 'react';
import * as S from './Stlyes';
import { AlertBox } from 'assets/icon';

const AlertComponent = () => {
  return (
    <S.AlertLayout>
      <AlertBox style={{ position: 'absolute', zIndex: -1 }} />
      <S.TextLayout>
        안건은 두 장 이상의 사진이 필요합니다.
        <br />
        사진을 더 선택해주세요.
      </S.TextLayout>
    </S.AlertLayout>
  );
};

export default AlertComponent;
