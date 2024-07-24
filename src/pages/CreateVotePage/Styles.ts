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
  height: 60%;
  position: absolute;
  top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
