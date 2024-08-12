import styled from 'styled-components';
import * as I from 'assets/icon';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: #646464;
  z-index: 2;
`;

export const ModalRect = styled(I.ModalRect)`
  width: 70%;
  height: auto;
  position: absolute;
  backdrop-filter: blur(10px);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 2;
`;

export const ModalBtn = styled(I.ModalBtn)`
  width: 25%;
  height: auto;
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
`;

export const Text = styled.div`
  color: black;
  font-size: 14px;
  text-align: center;
  position: absolute;
  font-weight: bolder;
  transform: translate(-50%, -50%);
  line-height: 1.3rem;
  cursor: pointer;
  z-index: 3;
`;
