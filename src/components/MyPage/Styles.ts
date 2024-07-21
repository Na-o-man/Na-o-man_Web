import styled from 'styled-components';
import * as I from 'assets/icon';

export const MyPageLayout = styled.div`
  background-color: #bbcfe5;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  position: absolute;
  overflow: auto;
`;

export const H = styled.div`
  z-index: 10;
`;
export const ProfileContainer = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  gap: 10px;
  color: white;
  font-size: 10px;
  margin: 0;
`;

export const Profile = styled(I.Profile)`
  position: relative;
  left: 0;
  top: 70%;
  width: 150px;
  height: 150px;
  z-index: 10;
`;

export const ProfileFontE = styled.div`
  position: relative;
  text-align: center;
  top: 160%;
  margin: 0;
`;
export const ProfileFontN = styled.div`
  position: relative;
  text-align: center;
  top: 80%;
  font-size: 20px;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const LogOutBtn = styled(I.InputGroupType)`
  position: absolute;
  top: -70%;
  left: -20%;
`;

export const LogOutText = styled.p`
  position: absolute;
  font-size: 1.1rem;
  color: #fefefe;
  z-index: 10;
  top: -64%;
  left: 30%;
  text-align: center;
`;

export const OutBtn = styled(I.InputGroupType)`
  position: absolute;
  top: -30%;
  left: -20%;
`;

export const OutText = styled.p`
  position: absolute;
  font-size: 1.1rem;
  color: #fefefe;
  z-index: 10;
  top: -24%;
  left: 30%;
`;

export const LogoImage = styled.img`
  width: 200px;
  margin: 0 auto;
  position: relative;
  padding-top: 50px;
`;

export const StyledCloud = styled(I.Cloud)`
  position: absolute;
  top: 80%;
  bottom: 0;
  right: 0px;
  width: 100px;
  height: 100px;
`;
