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
  width: 50%;
  pointer-events: none;
`;

export const AddFileText = styled.p`
  font-size: 1.2rem;
  color: #134b80;
  z-index: 10;
  position: absolute;
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
  width: 110px;
  height: 60px;
  margin-left: 70px;
  margin-top: 180px;
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
  width: 100px;
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
  top: 63%;
  width: 100%;
`;

export const InviteBar = styled(I.InviteBar)`
  position: absolute;
  width: 50%;
  z-index: 20;
  cursor: pointer;
`;

export const MoveBar = styled(InviteBar)`
  position: absolute;
  top: 35px;
  z-index: 20;
`;

export const InviteText = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  z-index: 30;
  font-weight: bold;
  cursor: pointer;
`;

export const MoveText = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  z-index: 30;
  font-weight: bold;
  position: absolute;
  top: 50px;
  cursor: pointer;
`;
