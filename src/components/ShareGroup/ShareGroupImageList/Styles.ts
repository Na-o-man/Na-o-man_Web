import styled from 'styled-components';

interface LayoutProps {
  isModal?: boolean;
}

export const Layout = styled.div<LayoutProps>`
  position: relative;
  top: 8.5rem;
  width: 90%;
  max-height: 72.5%;
  padding: 0 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;
  justify-items: center;
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
  opacity: ${({ isModal }) => (isModal ? 0.4 : 1)};
  transition: opacity 0.3s ease;
`;
