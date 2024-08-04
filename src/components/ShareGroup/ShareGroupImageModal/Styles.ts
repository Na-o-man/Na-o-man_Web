import styled from 'styled-components';
import * as I from 'assets/icon';
import CloseButton from 'assets/icon/share_group/close_button.png';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 1px);
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 93%;
  position: absolute;
  top: 0;
  border-radius: 18px;
  border: 2px solid #d8e7f7;
  overflow: hidden;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ModalBottomBox = styled(I.ModalBottomBox)`
  position: absolute;
  width: 91%;
  bottom: 10.5rem;
  z-index: 1;
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

export const DateBox = styled.div`
  position: absolute;
  bottom: 2%;
  right: 5%;
  font-size: 0.9rem;
  font-weight: 400;
`;
