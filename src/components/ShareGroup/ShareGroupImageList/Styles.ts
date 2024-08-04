import styled from 'styled-components';

interface LayoutProps {
  isModal?: boolean;
}

export const Layout = styled.div<LayoutProps>`
  position: relative;
  display: flex;
  justify-content: center;
  top: 6rem;
  width: 90%;
  max-height: 72.5%;
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
