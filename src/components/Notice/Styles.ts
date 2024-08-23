import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  background-color: #bbcfe5;
  width: 100%;
  height: 100%;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const NoticeTag = styled.div`
  position: absolute;
  top: 11%;
  left: 19%;
  color: #4e4e4e;
  font-weight: 700;
  font-size: 14px;
`;

export const IndexTag = styled(I.IndexTag)`
  position: absolute;
  top: 10%;
  width: 40%;
`;

export const NoticeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  height: 63%;
  position: absolute;
  top: 53%;
  left: 50%;
  padding: 1rem 0;
  transform: translate(-50%, -50%);
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

export const NoticeBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const DownCloud = styled(I.Cloud)`
  width: 25%;
  position: absolute;
  bottom: 10%;
  right: 3%;
  z-index: 0;
`;

export const NoticeBtn = styled(I.NoticeBtn)`
  position: absolute;
  top: -5%;
  right: 0;
`;

export const ButtonBox = styled.div`
  width: 90%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 17%;
`;

export const ButtonText = styled.div`
  width: 4rem;
  height: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  color: black;
  z-index: 100;
  position: absolute;
  right: 0;
`;
