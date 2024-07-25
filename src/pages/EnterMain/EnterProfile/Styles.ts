import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

export const ProfileContainer = styled.div``;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileBox = styled.div`
  z-index: 10;
  color: white;
  position: absolute;
  top: 48%;
  left: 50%;
  text-align: center;
  font-size: 9px;
  line-height: 1.5rem;
  transform: translate(-50%, -50%);
`;

export const Profile = styled(I.Profile)`
  z-index: 10;
  position: absolute;
  width: 35%;
  height: 100%;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProfileLine = styled(I.Line_star)`
  z-index: 10;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProfileGuide = styled.div`
  position: absolute;
  width: 100%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 15px;
  color: white;
  text-align: center;
  font-weight: bolder;
  line-height: 1.2rem;
  margin-top: 10px;
`;

export const PhotoAdd = styled(I.Buttonrect)`
  z-index: 10;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PhotoPlus = styled(I.AddBtn)`
  z-index: 10;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(150%, -50%);
  cursor: pointer;
`;

export const PhotoAddText = styled.div`
  z-index: 10;
  position: absolute;
  color: #4879af;
  top: 70%;
  font-weight: bolder;
  transform: translate(140%, -50%);
`;
