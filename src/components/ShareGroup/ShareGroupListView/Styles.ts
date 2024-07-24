import styled from 'styled-components';
import * as I from '../../../assets/icon';

export const Layout = styled.div`
  width: 90%;
  height: calc(100% - 20rem);
  position: relative;
  top: 12.5rem;
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

export const CloudWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Cloud = styled(I.Cloud)`
  position: absolute;
  bottom: 12.5rem;
  left: 1rem;
  z-index: 0;
  filter: drop-shadow(0px 6px 10px rgba(138, 138, 138, 0.25));
  transform: scale(0.8);
`;
