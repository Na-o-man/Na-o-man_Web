import styled from 'styled-components';

interface LayoutProps {
  isModal?: boolean;
}

export const Layout = styled.div<LayoutProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 6rem;
  width: 90%;
  height: 70%;
  overflow-y: auto;
  overflow-x: hidden;
  /* Scrollbar theme */
  scrollbar-color: ${({ theme }) => theme.colors.primary}
    rgba(254, 254, 254, 0.3);
  scrollbar-width: thin;
  -ms-overflow-style: none;
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
  }
  &::-webkit-scrollbar-track {
    background: rgba(254, 254, 254, 0.3);
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
  bottom: -6.75rem;
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
