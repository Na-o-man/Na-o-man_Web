import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AddFileContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const File = styled(I.File)`
  width: 60%;
  height: 100%;
  pointer-events: none;
`;

export const AddFileText = styled.p`
  font-size: 1.3rem;
  color: #134b80;
  position: absolute;
  z-index: 10;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const CopyCloudContainer = styled.div`
  display: flex;
  z-index: 20;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  top: 30%;
  left: 40%;
  width: 90px;
  height: 60px;
  margin-left: 80px;
  margin-top: 190px;
`;

export const Cloud = styled(I.Cloud)`
  position: relative;
  z-index: 20;
  width: 120px;
  height: 80px;
  pointer-events: none;
`;

export const CloudButton = styled.button`
  position: absolute;
  width: 90px;
  height: 60px;
  background-color: transparent;
  border: none;
  z-index: 40;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CopyCloudText = styled.p`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  text-align: center;
  z-index: 30;
  right: 49%;
  top: 1%;
  font-weight: bold;
  pointer-events: none;
`;

export const Copy = styled(I.Copy)`
  position: relative;
  z-index: 30;
  width: 20px;
  right: 43%;
  top: 1.5%;
  height: 13px;
  pointer-events: none;
`;

export const InviteContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 20%;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const InviteBar = styled(I.InviteBar)`
  position: relative;
  z-index: 20;
  width: 60%;
  height: 40%;
  pointer-events: none;
`;

export const InviteText = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  position: relative;
  z-index: 30;
  font-weight: bold;
  bottom: 21%;
  pointer-events: none;
`;

export const InviteBar2 = styled(I.InviteBar)`
  position: relative;
  z-index: 20;
  width: 60%;
  height: 40%;
  top: 10%;
`;

export const InviteText2 = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  position: relative;
  text-align: center;
  z-index: 30;
  font-weight: bold;
  bottom: 11%;
`;

export const GroupFloderButton = styled.button`
  width: 190px;
  height: 40px;
  background-color: transparent;
  margin-top: 430px;
  z-index: 50;

  &:hover {
    cursor: pointer;
  }
`;
