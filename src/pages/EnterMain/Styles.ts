import styled, { keyframes } from 'styled-components';
import * as I from 'assets/icon';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Layout = styled.div`
  width: '100%';
  height: '100%';
  display: flex;
  z-index: 0;
`;

export const Symbol = styled.img`
  width: 20%;
  position: absolute;
  top: 25%;
  left: 5%;
  z-index: 20;
  animation: ${rotate} 5s linear infinite;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export const Logo = styled.img`
  z-index: 10;
  width: 70%;
  position: absolute;
  top: 25%;
  left: 15%;
`;
