import React from 'react';
import * as S from './Styles';
import MyPageMain from 'components/MyPage/MyPageMain';
import Header from 'components/Header/Header';
import { useRecoilValue } from 'recoil';
import { myPageModalState, modalMessageState } from 'recoil/states/mypage';
import Modal from 'components/MyPage/Modal/Modal';

const MyPage = () => {
  const isModalOpen = useRecoilValue(myPageModalState);
  const modalMessage = useRecoilValue(modalMessageState);

  return (
    <>
      <MyPageMain />
      <Header backarrow />
      {isModalOpen && <Modal modalMessage={modalMessage} />}
    </>
  );
};

export default MyPage;
