import React from 'react';
import * as S from './Styles';
import { useLocation, useNavigate } from 'react-router-dom';

const AddGroupshare = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { shareGroupId, inviteCode, name } = location.state || {
    inviteCode: '',
    place: '',
  };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = () => {
    if (shareGroupId) {
      navigate(`/group/${shareGroupId}`);
    }
  };

  return (
    <S.Layout>
      <S.AddFileContainer>
        <S.File />
        <S.AddFileText>{name}</S.AddFileText>
      </S.AddFileContainer>
      <S.CopyCloudContainer onClick={handleCopyClipBoard}>
        <S.Cloud />
        <S.CopyCloudText>링크복사</S.CopyCloudText>
        <S.Copy />
      </S.CopyCloudContainer>
      <S.InviteContainer>
        <S.InviteBar />
        <S.InviteText>링크 공유해서 친구 초대하기</S.InviteText>
        <S.InviteBar onClick={handleClick} />
        <S.RedirectText onClick={handleClick}>공유 폴더 가기</S.RedirectText>
      </S.InviteContainer>
    </S.Layout>
  );
};

export default AddGroupshare;
