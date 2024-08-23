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
  align-items: flex-end;
  justify-content: center;
  z-index: 0;
  width: 100%;
  height: 22%;
`;

export const File = styled(I.File)`
  height: 100%;
  pointer-events: none;
  position: absolute;
  bottom: 0;
`;

export const AddFileText = styled.p`
  font-size: 1.2rem;
  color: #134b80;
  position: absolute;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

export const CopyCloudContainer = styled.div`
  width: 50%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  position: relative;
`;

export const Cloud = styled(I.Cloud)`
  position: absolute;
  width: 48%;
  right: -2.3rem;
`;

export const CopyCloudText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  right: -0.5rem;
  bottom: 0.3rem;
  text-align: center;
  font-weight: bold;
  font-size: 0.7rem;
`;

export const Copy = styled(I.Copy)`
  position: absolute;
  z-index: 30;
  right: -1.5rem;
  bottom: 0.3rem;
`;

export const InviteContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: absolute;
  top: 60%;
`;

export const InviteBar = styled(I.InviteBar)`
  width: 60%;
  cursor: pointer;
`;

export const InviteText = styled.p`
  font-size: 0.9rem;
  color: #134b80;
  font-weight: 400;
  cursor: pointer;
  position: absolute;
  top: 29%;
`;

export const RedirectText = styled(InviteText)`
  top: 60%;
`;
