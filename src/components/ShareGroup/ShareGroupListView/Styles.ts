import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: 90%;
  height: 70%;
  position: relative;
  top: 7.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  transition: scrollbar-color 0.3s ease;
  /* Scrollbar theme */
  scrollbar-color: ${({ theme }) => theme.colors.primary}
    rgba(254, 254, 254, 0.3);
  scrollbar-width: thin;
  -ms-overflow-style: none;
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
  }
  &::-webkit-scrollbar-track {
    background: rgba(254, 254, 254, 0.3);
  }
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
`;

export const Cloud = styled(I.Cloud)`
  position: fixed;
  bottom: 25%;
  left: 39%;
  z-index: 0;
  filter: drop-shadow(0px 6px 10px rgba(138, 138, 138, 0.25));
  transform: scale(0.8);
`;
