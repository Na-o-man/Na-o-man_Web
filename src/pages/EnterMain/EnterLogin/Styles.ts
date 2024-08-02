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

export const LayOut = styled.div`
  z-index: 20;
`;

export const GoogleLogin = styled(I.GoogleLogin)`
  z-index: 10;
  position: absolute;
  width: 100%;
  top: 60%;
  cursor: pointer;
`;

export const KakaoLogin = styled(I.KakaoLogin)`
  z-index: 10;
  position: absolute;
  width: 100%;
  top: 70%;
  cursor: pointer;
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
