import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  background-color: #bbcfe5;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const HeaderComponent = styled.div`
  z-index: 100;
  position: relative;
`;

export const NoticeTag = styled.div`
  position: absolute;
  top: 14%;
  left: 20%;
  color: #4e4e4e;
  font-weight: bolder;
  font-size: 15px;
`;

export const IndexTag = styled(I.IndexTag)`
  position: absolute;
  top: 13%;
  width: 35%;
  height: auto;
  cursor: pointer;
`;

export const NoticeContainer = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const NoticeBox = styled.div`
  position: relative;
  margin-top: 50%;
  width: 350px;
  height: 650px;
  gap: 10px;
  transform: scale(0.9);
  background-color: transparent;
  overflow: auto;
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

export const DownCloud = styled(I.Cloud)`
  position: absolute;
  top: 90%;
  left: 70%;
`;

export const NoticeBtn = styled(I.NoticeBtn)`
  width: 20%;
  height: 40%;
  left: 45%;
  position: absolute;
`;

export const TextRead = styled.div`
  font-weight: 500;
  top: 19.2%;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  color: black;
  z-index: 100;
`;

export const BtnContainer = styled.button`
  cursor: pointer;
  display: block;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TextDelete = styled.div`
  font-weight: 500;
  top: 19.2%;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  color: black;
  z-index: 100;
`;
