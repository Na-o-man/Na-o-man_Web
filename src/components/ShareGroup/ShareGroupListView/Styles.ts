import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: 90%;
  height: 70%;
  position: relative;
  z-index: 1;
  top: 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`;
