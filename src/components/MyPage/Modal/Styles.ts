import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div``;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.4;
  z-index: 0;
`;

export const ModalRect = styled(I.ModalRect)`
  width: 70%;
  height: auto;
  position: absolute;
  backdrop-filter: blur(10px);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 3;
`;

export const ModalBtn = styled(I.ModalBtn)`
  width: 25%;
  height: auto;
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 5;
`;

export const Text = styled.div`
  color: black;
  font-size: 17px;
  position: absolute;
  font-weight: bolder;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
`;
