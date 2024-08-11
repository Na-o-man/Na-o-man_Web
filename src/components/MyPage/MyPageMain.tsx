import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import logoblurred from '../../assets/logo/typo-blurred.png';
import background from 'assets/background/cloudLeft.png';
import { getMyInfo } from 'apis/getMyInfo';

import { useSetRecoilState } from 'recoil';
import {
  myPageModalState,
  modalMessageState,
  modalDataState,
} from 'recoil/states/mypage';

interface responseType {
  name: string;
  email: string;
  image: string;
  memberId: number; // memberId 추가
}

const MyPageMain = () => {
  const [data, setData] = useState<responseType>();
  const setModalOpen = useSetRecoilState(myPageModalState);
  const setModalMessage = useSetRecoilState(modalMessageState);
  const setModalData = useSetRecoilState(modalDataState);
  const openLogoutModal = () => {
    setModalMessage('로그아웃 하시겠습니까?');
    setModalOpen(true);
  };

  const openWithdrawalModal = () => {
    setModalMessage('탈퇴하시겠습니까? 데이터는 복구할 수 없습니다.');
    if (data) {
      setModalData({ memberId: data.memberId });
      setModalOpen(true);
    } else setModalOpen(true);
  };

  useEffect(() => {
    getMyInfo()
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <S.Layout>
      <S.Background src={background}></S.Background>
      <S.Profile image={data?.image} />
      <S.Logo src={logoblurred} />
      <S.EmailText>{data?.email}</S.EmailText>
      <S.NameText>{data?.name}</S.NameText>
      <S.LogOutBtn onClick={openLogoutModal} />
      <S.OutServiceBtn onClick={openWithdrawalModal} />
      <S.BtnText style={{ top: '66%', left: '50%' }} onClick={openLogoutModal}>
        로그아웃
      </S.BtnText>
      <S.BtnText
        style={{ top: '73%', left: '50%' }}
        onClick={openWithdrawalModal}
      >
        회원 탈퇴
      </S.BtnText>
      <S.StyledCloud />
    </S.Layout>
  );
};

export default MyPageMain;
