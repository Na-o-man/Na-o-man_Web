import styled from 'styled-components';
import * as I from 'assets/icon';

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
