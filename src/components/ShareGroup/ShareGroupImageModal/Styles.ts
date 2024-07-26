import styled from 'styled-components';
import * as I from 'assets/icon';
import CloseButton from 'assets/icon/share_group/close_button.png';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: calc(50% - 1px);
  transform: translate(-50%, -50%);
  width: 341px;
  height: 50%;
  border: 2px solid #d8e7f7;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
`;

export const ModalBottomBox = styled(I.ModalBottomBox)`
  position: absolute;
  bottom: 12rem;
  z-index: 500;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  background-image: url(${CloseButton});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
