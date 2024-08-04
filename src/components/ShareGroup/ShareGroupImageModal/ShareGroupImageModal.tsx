import React, { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isModalState } from 'recoil/states/share_group';
import * as S from './Styles';

interface ImageModalProps {
  src: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, onClose }) => {
  const isModal = useRecoilValue(isModalState);

  if (!isModal) return null;

  return (
    <>
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalImage src={src} alt="Modal image" />
          <S.ModalCloseButton onClick={onClose} />
        </S.ModalContent>
        <S.DateBox>2024.08.04</S.DateBox>
      </S.ModalOverlay>
      <S.ModalBottomBox />
    </>
  );
};

export default ImageModal;
