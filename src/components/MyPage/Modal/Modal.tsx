import React from 'react';
import * as S from './Styles';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  myPageModalState,
  modalMessageState,
  modalDataState,
} from 'recoil/states/mypage';
import { deleteUser } from 'apis/getMembers';

interface ModalProps {
  modalMessage: string;
  data?: { memberId: number };
}

const Modal: React.FC<ModalProps> = ({ modalMessage }) => {
  const setModalOpen = useSetRecoilState(myPageModalState);
  const setModalMessage = useSetRecoilState(modalMessageState);
  const modalData = useRecoilValue(modalDataState);

  const handleClick = () => {
    setModalOpen(false);
  };

  //회원 탈퇴 버튼 api
  const handleConfirm = async () => {
    if (modalMessage === '탈퇴하시겠습니까? 데이터는 복구할 수 없습니다.') {
      if (modalData && modalData.memberId) {
        try {
          await deleteUser(modalData.memberId);
          setModalMessage('회원 탈퇴가 완료되었습니다.');
        } catch (error) {
          console.error('회원 탈퇴 중 오류 발생:', error);
          setModalMessage('회원 탈퇴 중 오류가 발생했습니다.');
        }
      } else {
        console.error('멤버 id 데이터가 없습니다.');
      }
    } else if (modalMessage === '로그아웃 하시겠습니까?') {
      console.log('로그아웃 처리');
    }
    setModalOpen(false);
  };

  return (
    <>
      <S.Background onClick={handleClick} />
      <S.ModalRect />
      <S.Text style={{ top: '47%', left: '50%' }}>{modalMessage}</S.Text>
      <S.Text style={{ top: '52.8%', left: '35%' }} onClick={handleConfirm}>
        예
      </S.Text>
      <S.Text
        style={{ top: '52.8%', left: '65%', color: 'red' }}
        onClick={handleClick}
      >
        아니오
      </S.Text>
      <S.ModalBtn style={{ top: '53%', left: '35%' }} onClick={handleConfirm} />
      <S.ModalBtn style={{ top: '53%', left: '65%' }} onClick={handleClick} />
    </>
  );
};

export default Modal;
