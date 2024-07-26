import styled from 'styled-components';

export const Layout = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  overflow-y: auto;
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
`;
