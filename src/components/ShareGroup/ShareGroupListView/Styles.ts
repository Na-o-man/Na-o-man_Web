import styled from 'styled-components';

export const Layout = styled.div`
  height: calc(100% - 15rem);
  position: relative;
  top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  transition: scrollbar-color 0.3s ease;

  scrollbar-color: rgba(155, 155, 155, 0.7) transparent;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;
