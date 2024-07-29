import React from 'react';
import * as S from './Styles';
import { CloseModal, NextArrow } from 'assets/icon';
import { useSetRecoilState } from 'recoil';
import { isModalOpen } from 'recoil/states/vote';
import sample from '../../../assets/icon/vote/sample_img.png';
import CommentBox from '../CommentBox/CommentBox';

const VoteModal = () => {
  const setIsOpen = useSetRecoilState(isModalOpen);
  const handleIconClick = () => {
    setIsOpen(false);
  };
  const isVoteDone = false;

  return (
    <S.ModalLayout>
      <S.IconLayout onClick={handleIconClick}>
        <CloseModal width={'80%'} />
      </S.IconLayout>
      <S.ImgLayout>
        <S.ImgContainer src={sample} />
      </S.ImgLayout>
      {isVoteDone && (
        <S.CommentLayout>
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </S.CommentLayout>
      )}
      {!isVoteDone && (
        <S.InputLayout>
          <S.InputContainer placeholder="의견을 남겨주세요" />
          <S.VoteBtn>
            투표 하기
            <NextArrow style={{ width: '1rem', fill: '#BBB' }} />
          </S.VoteBtn>
        </S.InputLayout>
      )}
    </S.ModalLayout>
  );
};

export default VoteModal;
