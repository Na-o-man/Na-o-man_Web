import React, { useEffect } from 'react';
import * as S from './Styles';
import skydark from '../../../assets/background/sky_dark.png';
import { Link, Outlet } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accessToken, UserState } from 'recoil/states/enter';
import axios from 'axios';

const EnterProfile = () => {
  const [user, setUserInfo] = useRecoilState(UserState);
  const token = useRecoilValue(accessToken);
  console.log(`token: ${token}`);
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user && token) {
        try {
          const res = await axios.get(`/members/my`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
          setUserInfo(res.data.data);
          console.log(res.data.data);
        } catch (e) {
          console.error(e);
        }
      }
    };

    fetchUserData();
  }, [user, token, setUserInfo]);

  return (
    <>
      <Outlet />
      <S.Layout>
        <Link to="guide">
          <S.Background src={skydark}></S.Background>
          <S.Profile src={user.image} />
          <S.ProfileBox>
            {user.email}
            <S.Name>{user.name}</S.Name>
          </S.ProfileBox>
          <S.ProfileLine />
          <S.ProfileGuide>
            <div>사진 분류를 위해 인공지능을 학습 시킬 거에요.</div>
            <div>학습에 필요한 얼굴 사진을 추가해 주세요.</div>
          </S.ProfileGuide>
          <S.PhotoAdd></S.PhotoAdd>
          <S.PhotoAddText>
            <div>사진 추가하기</div>
          </S.PhotoAddText>
          <S.PhotoPlus />
        </Link>
      </S.Layout>
    </>
  );
};

export default EnterProfile;
