import React from 'react';
import * as S from './Styles';
import MyPageMain from 'components/MyPage/MyPageMain';
import Header from 'components/Header/Header';
import { useRecoilValue } from 'recoil';
import { myPageModalState } from 'recoil/states/mypage';
import Modal from 'components/MyPage/Modal/Modal';

const MyPage = () => {
  const isModalOpen = useRecoilValue(myPageModalState);
  return (
    <>
      <MyPageMain />
      <Header backarrow />
      {isModalOpen && <Modal />}
    </>
  );
};

export default MyPage;
