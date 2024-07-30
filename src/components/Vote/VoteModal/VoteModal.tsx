import React, { useState } from 'react';
import * as S from './Styles';
import { CloseModal, NextArrow } from 'assets/icon';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isModalOpen, selectedPic } from 'recoil/states/vote';

const VoteModal = () => {
  const setIsOpen = useSetRecoilState(isModalOpen);
  const data = useRecoilValue(selectedPic);
  const [comment, setComment] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleIconClick = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    setIsOpen(false);
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
        />
        <S.VoteBtn>
          투표 하기
          <NextArrow style={{ width: '1rem', fill: '#BBB' }} />
        </S.VoteBtn>
      </S.InputLayout>
    </S.ModalLayout>
  );
};

export default VoteModal;
