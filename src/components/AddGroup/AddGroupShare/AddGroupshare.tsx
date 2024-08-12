import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { shareGroupListState } from '../../../recoil/states/share_group';

const AddGroupshare = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const shareGroupList = useRecoilValue(shareGroupListState);

  const { inviteUrl, place } = location.state || { inviteUrl: '', place: '' };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = () => {
    navigate('/group');
  };

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
        <S.CloudButton onClick={handleCopyClipBoard} />
      </S.CopyCloudContainer>
      <S.InviteContainer>
        <S.InviteBar />
        <S.InviteText>링크 공유해서 친구 초대하기</S.InviteText>
      </S.InviteContainer>
      <S.InviteContainer>
        <S.InviteBar2 />
        <S.InviteText2>공유 폴더 가기</S.InviteText2>
      </S.InviteContainer>
      <S.GroupFloderButton onClick={handleClick} />
    </S.Layout>
  );
};

export default AddGroupshare;
