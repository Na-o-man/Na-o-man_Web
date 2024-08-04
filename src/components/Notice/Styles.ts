import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  background-color: #bbcfe5;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const H = styled.div`
  z-index: 10;
`;

export const NoticeTag = styled.div`
  position: absolute;
  top: 14%;
  left: 20%;
  color: black;
  font-weight: bolder;
  font-size: 15px;
  z-index: 15;
`;

export const IndexTag = styled(I.IndexTag)`
  position: absolute;
  top: 13%;
  z-index: 10;
  width: 35%;
  height: auto;
  cursor: pointer;
`;

export const NoticeContainer = styled.div`
  display: grid;
  justify-content: center;
  z-index: 20;
  padding-top: 200px;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;

export const NoticeBox = styled.div`
  position: relative;
  margin-top: 17px;
  width: 350px;
  height: 650px;
  gap: 10px;
  background-color: transparent;
  z-index: 10;

  overflow: auto;
  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #cfdbea;
    border-radius: 7px;
  }
`;

export const DownCloud = styled(I.Cloud)`
  position: absolute;
  top: 90%;
  left: 70%;
  z-index: 0;
`;

export const NoticeBtn = styled(I.NoticeBtn)`
  width: 20%;
  height: 40%;
  left: 45%;
  z-index: 0;
  position: absolute;
`;

export const TextRead = styled.div<{ isDisabled: boolean }>`
  font-weight: bold;
  top: 19.3%;
  z-index: 5;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
  color: black;
  ${({ isDisabled }) =>
    isDisabled &&
    `
    color: gray; 
    cursor: not-allowed; 
    pointer-events: none; 
  `}
`;

export const BtnContainer = styled.button`
  cursor: pointer;
  display: block;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TextDelete = styled.div<{ isDisabled: boolean }>`
  font-weight: bold;
  top: 19.3%;
  z-index: 5;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
  color: black;
  ${({ isDisabled }) =>
    isDisabled &&
    `
    color: gray; 
    cursor: not-allowed; 
    pointer-events: none;
  `}
`;
