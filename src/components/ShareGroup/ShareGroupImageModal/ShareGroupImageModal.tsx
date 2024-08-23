import React from 'react';
import { useRecoilValue } from 'recoil';
import { isModalState } from 'recoil/states/share_group';
import * as S from './Styles';

interface ImageModalProps {
  date?: string;
  src: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ date, src, onClose }) => {
  const isModal = useRecoilValue(isModalState);

  if (!isModal) return null;

  return (
    <S.BackLayout>
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalImage src={src} alt="Modal image" />
          <S.ModalCloseButton onClick={onClose} />
        </S.ModalContent>
        <S.DateBox>{date}</S.DateBox>
        <S.ModalBottomBox />
      </S.ModalOverlay>
    </S.BackLayout>
  );
};

export default ImageModal;
