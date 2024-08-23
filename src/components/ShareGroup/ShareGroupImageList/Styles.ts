import { FilledCloudBtn } from 'assets/icon';
import styled from 'styled-components';

interface LayoutProps {
  isModal?: boolean;
}

export const Layout = styled.div<LayoutProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 6rem;
  width: 90%;
  height: 75%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.3);
    width: 1px;
    border-radius: 7px;
  }
  opacity: ${({ isModal }) => (isModal ? 0.4 : 1)};
  transition: opacity 0.3s ease;
`;

export const PhotoLayout = styled.div`
  width: 85%;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const PageContainer = styled.div`
  position: relative;
  bottom: -6.85rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Page = styled.p`
  font-size: 0.75rem;
`;

export const PageBtn = styled.button`
  font-size: 0.75rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TextLayout = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: white;
  position: absolute;
  top: calc(100% - 3.5rem);
  padding-top: 0.5rem;
`;

export const CloudButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -20%;
  cursor: pointer;
`;

export const CloudButton = styled(FilledCloudBtn)`
  position: absolute;
  bottom: 0;
`;

export const CloudButtonText = styled.p`
  width: 5rem;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #4879af;
  position: absolute;
  bottom: 1.2rem;
  z-index: 1;
`;
