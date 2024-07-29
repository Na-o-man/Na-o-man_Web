import React from 'react';
import * as S from './Styles';
import { CloseModalGrey, ModalBack } from 'assets/icon';
import { useSetRecoilState } from 'recoil';
import { isModalOpen } from 'recoil/states/vote';
import sample from '../../../assets/icon/vote/sample_img.png';
import CommentBox from '../CommentBox/CommentBox';
import VoteTitle from '../VoteTitle/VoteTitle';

const VoteResultModal = () => {
  const setIsOpen = useSetRecoilState(isModalOpen);
  const handleIconClick = () => {
    setIsOpen(false);
  };

  return (
    <S.ModalLayout>
      <VoteTitle clicked />
      <ModalBack
        style={{
          position: 'absolute',
          top: '-20%',
          width: '100%',
          zIndex: '-1',
          backdropFilter: 'blur(10px)',
        }}
      />
      <S.ImgLayout>
        <S.IconLayout onClick={handleIconClick}>
          <CloseModalGrey width={'70%'} />
        </S.IconLayout>
        <S.ImgContainer src={sample} />
      </S.ImgLayout>
      <S.VoterLayout>
        <S.VoterContainer>
          <S.VoterBox />
        </S.VoterContainer>
        <S.VoterContainer>
          <S.VoterBox />
        </S.VoterContainer>
        <S.VoterContainer>
          <S.VoterBox />
        </S.VoterContainer>
      </S.VoterLayout>
      <S.CommentLayout>
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </S.CommentLayout>
    </S.ModalLayout>
  );
};

export default VoteResultModal;
