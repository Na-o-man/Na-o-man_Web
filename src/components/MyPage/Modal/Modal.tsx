import React from 'react';
import * as S from './Styles';
const Modal = () => {
  return (
    <S.Layout>
      <S.Background />
      <S.ModalRect />
      <S.Text style={{ top: '47%', left: '50%' }}>
        <div>로그아웃 하시겠습니까?</div>
      </S.Text>
      <S.Text style={{ top: '52.8%', left: '35%' }}>
        <div>예</div>
      </S.Text>
      <S.Text style={{ top: '52.8%', left: '65%', color: 'red' }}>
        <div>아니오</div>
      </S.Text>
      <S.ModalBtn style={{ top: '53%', left: '35%' }} />
      <S.ModalBtn style={{ top: '53%', left: '65%' }} />
    </S.Layout>
  );
};

export default Modal;
