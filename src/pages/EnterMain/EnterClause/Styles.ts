import styled from 'styled-components';
import * as I from 'assets/icon';
import IconCheck from './IconCheck';
export const Layout = styled.div`
  width: 100%;
  height: 100%;
  z-index: 30;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 30;
`;

export const Logo = styled.img`
  z-index: 31;
  position: absolute;
  width: 50%;
  top: 10%;
  left: 25%;
`;

export const TitleContainer = styled.div`
  display: grid;
`;

export const Cloudrect = styled(I.Cloudrect)`
  z-index: 31;
  position: absolute;
  width: 100%;
  top: 16%;
`;

export const TitleBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: auto;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 35;
`;

export const Symbol = styled.img`
  position: absolute;
  width: 7%;
  top: 35%;
  left: 47%;
  z-index: 35;
`;

export const TitleTextUp = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 35;
  color: #7b7b7b;
  margin: 0;
  padding: 50px 0;
`;

export const TitleTextDown = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  z-index: 35;
  color: #4879af;
  font-weight: bold;
  margin-left: 27px;
  padding: 20px 0px;
  grid-template-columns: 210px 8px;
  cursor: pointer;
`;

export const Text = styled.div`
  z-index: 36;
  margin-left: 15px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  display: grid;
  grid-template-columns: 50px 150px 50px;
  color: black;
`;

export const IconNeed = styled(I.Icon_need)`
  z-index: 35;
  justify-content: center;
  display: grid;
  color: black;
`;

export const IconChoice = styled(I.Icon_choice)`
  z-index: 35;
  justify-content: center;
  color: black;
`;

export const IconCheck1 = styled(IconCheck)`
  cursor: pointer;
`;

export const IconCheck3 = styled(I.Icon_check3)`
  z-index: 35;
  justify-content: center;
  width: 200%;
  left: 10%;
  color: black;
  cursor: pointer;
`;

export const ClauseAccept = styled(I.ClauseBtn)`
  z-index: 34;
  width: 100%;
  left: 30%;
  top: 100%;
  position: absolute;
  cursor: pointer;
`;
