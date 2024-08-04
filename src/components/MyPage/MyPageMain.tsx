import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import logoblurred from '../../assets/logo/typo-blurred.png';
import background from 'assets/background/cloudLeft.png';
import { getMyInfo } from 'apis/getMyInfo';
import { useSetRecoilState } from 'recoil';
import { myPageModalState } from 'recoil/states/mypage';

interface responseType {
  name: string;
  email: string;
  image: string;
}

const MyPageMain = () => {
  const [data, setData] = useState<responseType>();
  const setModalOpen = useSetRecoilState(myPageModalState);
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
      <S.LogOutBtn onClick={() => setModalOpen(true)} />
      <S.OutServiceBtn onClick={() => setModalOpen(true)} />
      <S.BtnText
        style={{ top: '66%', left: '50%' }}
        onClick={() => setModalOpen(true)}
      >
        로그아웃
      </S.BtnText>
      <S.BtnText
        style={{ top: '73%', left: '50%' }}
        onClick={() => setModalOpen(true)}
      >
        회원 탈퇴
      </S.BtnText>
      <S.StyledCloud />
    </S.Layout>
  );
};

export default MyPageMain;
