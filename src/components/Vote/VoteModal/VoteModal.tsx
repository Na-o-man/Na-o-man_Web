import React, { useState } from 'react';
import * as S from './Styles';
import { CloseModal, NextArrow } from 'assets/icon';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isModalOpen, selectedPic } from 'recoil/states/vote';
import { ParticularAgendaVote } from 'apis/vote';

const VoteModal = () => {
  const setIsOpen = useSetRecoilState(isModalOpen);
  const [data, setData] = useRecoilState(selectedPic);
  const [comment, setComment] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleIconClick = () => {
    setIsOpen(false);
  };
  const handleSubmit = async () => {
    setData({ ...data, comment: comment });
    setIsOpen(false);
    try {
      const voteData = [
        {
          comment: comment,
          agendaPhotoId: data.pictureId,
        },
      ];
      await ParticularAgendaVote(data.agendaId, voteData);
      console.log('Vote successfully submitted!');
      // 투표 성공 로그
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error submitting vote:', error.message);
        alert('투표 제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
      } else {
        console.error('Unknown error occurred:', error);
        alert('알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    }
  };

  return (
    <S.ModalLayout style={{ marginTop: '15%' }}>
      <S.IconLayout onClick={handleIconClick}>
        <CloseModal width={'80%'} />
      </S.IconLayout>
      <S.ImgLayout>
        <S.ImgContainer src={data.url} />
      </S.ImgLayout>
      <S.InputLayout>
        <S.InputContainer
          placeholder="의견을 남겨주세요"
          onChange={handleChange}
          value={comment}
        />
        <S.VoteBtn onClick={handleSubmit}>
          투표 하기
          <NextArrow style={{ width: '1rem', fill: '#BBB' }} />
        </S.VoteBtn>
      </S.InputLayout>
    </S.ModalLayout>
  );
};

export default VoteModal;
