import styled from 'styled-components';
import CloudButtonWhite from '../../../assets/icon/vote/cloud_btn_white.png';

export const Layout = styled.button`
  width: 6rem;
  height: 3.5rem;
  position: absolute;
  right: 0;
  bottom: 10%;
  z-index: 500;
  background-image: url(${CloudButtonWhite});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
