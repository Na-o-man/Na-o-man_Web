import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;

export const ProfileContainer = styled.div`
  transform: translate(-50%, -50%);
`;

export const Profile = styled.img`
  position: absolute;
  width: 35%;
  border-radius: 50%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

export const EmailText = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  font-size: 10px;
  color: #fefefe;
  transform: translate(-50%, -50%);
`;

export const NameText = styled(EmailText)`
  top: 48%;
  left: 50%;
  font-size: 15px;
  font-weight: 600;
`;

export const LogOutBtn = styled(I.LoginRect)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 66%;
  left: 50%;
  width: 60%;
  cursor: pointer;
`;

export const OutServiceBtn = styled(I.LoginRect)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 73%;
  left: 50%;
  width: 60%;
  cursor: pointer;
`;

export const BtnText = styled.div`
  position: absolute;
  font-size: 0.9rem;
  color: #fefefe;
  transform: translate(-50%, -50%);
  font-weight: 600;
  cursor: pointer;
`;

export const Logo = styled.img`
  position: absolute;
  width: 40%;
  height: auto;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
`;

export const StyledCloud = styled(I.Cloud)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 79%;
  right: -17%;
  width: 30%;
  height: auto;
`;
