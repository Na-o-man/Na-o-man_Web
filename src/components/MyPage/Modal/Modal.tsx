import React from 'react';
import * as S from './Styles';
import { useSetRecoilState } from 'recoil';
import { myPageModalState } from 'recoil/states/mypage';
const Modal = () => {
  const setModalOpen = useSetRecoilState(myPageModalState);
  const handleClick = () => {
    setModalOpen(false);
  };
  return (
    <>
      <S.Background onClick={handleClick} />
      <S.ModalRect />
      <S.Text style={{ top: '47%', left: '50%' }}>
        로그아웃 하시겠습니까?
      </S.Text>
      <S.Text style={{ top: '52.8%', left: '35%' }} onClick={handleClick}>
        예
      </S.Text>
      <S.Text
        style={{ top: '52.8%', left: '65%', color: 'red' }}
        onClick={handleClick}
      >
        아니오
      </S.Text>
      <S.ModalBtn style={{ top: '53%', left: '35%' }} onClick={handleClick} />
      <S.ModalBtn style={{ top: '53%', left: '65%' }} onClick={handleClick} />
    </>
  );
};

export default Modal;
