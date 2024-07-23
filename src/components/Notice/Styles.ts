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
`;

export const NoticeContainer = styled.div`
  display: grid;
  justify-content: center;
  z-index: 10;
  padding-top: 200px;
`;

export const NoticeBox = styled.div`
  position: relative;
  width: 350px;
  height: 600px;
  gap: 10px;
  background-color: transparent;
  overflow: auto;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 7px;
  }
`;

export const DownCloud = styled(I.Cloud)`
  display: grid;
  display: block;
  position: absolute;
  top: 83%;
  left: 70%;
  z-index: 5;
`;
