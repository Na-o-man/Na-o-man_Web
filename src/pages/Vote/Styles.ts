import styled from 'styled-components';
import cloud from '../../assets/background/cloud_upper_below.png';

export const Layout = styled.div`
  background-image: url(${cloud});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BackLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const DropDownBox = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
`;
