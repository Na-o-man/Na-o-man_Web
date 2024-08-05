import React from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { placeState } from '../state';

const AddGroupshare = () => {
  const place = useRecoilValue(placeState);

  return (
    <S.Layout>
      <S.AddFileContainer>
        <S.File />
        <S.AddFileText>{place}</S.AddFileText>
      </S.AddFileContainer>
      <S.CopyCloudContainer>
        <S.Cloud />
        <S.CopyCloudText>링크복사</S.CopyCloudText>
        <S.Copy />
      </S.CopyCloudContainer>
      <S.InviteContainer>
        <S.InviteBar />
        <S.InviteText>링크 공유해서 친구 초대하기</S.InviteText>
      </S.InviteContainer>
      <S.InviteContainer>
        <S.InviteBar2 />
        <S.InviteText2>공유 폴더 가기</S.InviteText2>
      </S.InviteContainer>
    </S.Layout>
  );
};

export default AddGroupshare;
