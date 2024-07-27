import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: '100%';
  height: '100%';
  display: flex;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;

export const H = styled.div`
  z-index: 20;
`;
export const ProfileContainer = styled.div`
  transform: translate(-50%, -50%);
`;

export const Profile = styled(I.Profile)`
  position: absolute;
  width: 35%;
  height: 35%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const NameText = styled.div`
  position: absolute;
  font-size: 10px;
  color: #fefefe;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const LogOutBtn = styled(I.LoginRect)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 64%;
  left: 50%;
  width: 100%;
  cursor: pointer;
`;

export const OutServiceBtn = styled(I.LoginRect)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 71%;
  left: 50%;
  width: 100%;
  cursor: pointer;
`;

export const BtnText = styled.div`
  position: absolute;
  font-size: 1.1rem;
  color: #fefefe;
  transform: translate(-50%, -50%);
  font-weight: bolder;
  z-index: 10;
  cursor: pointer;
`;

export const Logo = styled.img`
  position: absolute;
  width: 40%;
  height: auto;
  transform: translate(-50%, -50%);
  top: 54%;
  left: 50%;
  z-index: 5;
`;

export const StyledCloud = styled(I.Cloud)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 75%;
  right: -17%;
  width: 30%;
  height: auto;
`;
