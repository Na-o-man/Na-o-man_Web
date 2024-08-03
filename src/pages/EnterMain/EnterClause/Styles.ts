import styled from 'styled-components';
import * as I from 'assets/icon';
import IconCheck from './IconCheck';
export const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Logo = styled.img`
  position: absolute;
  width: 50%;
  top: 10%;
  left: 25%;
`;

export const Cloudrect = styled(I.Cloudrect)`
  position: absolute;
  width: 97%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleBox = styled.div`
  width: 60%;
  justify-content: center;
  align-items: center;
  height: auto;
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 35;
`;

export const Symbol = styled.img`
  position: absolute;
  width: 7%;
  top: 30%;
  left: 47%;
`;

export const TitleTextUp = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #7b7b7b;
  margin: 0;
  padding: 25px 0;
`;

export const TitleTextDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4879af;
  font-weight: bold;
  padding: 25px 0px;
  cursor: pointer;
  position: relative;
`;

export const Text = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  row-gap: 5px;
  grid-template-columns: 1fr 7fr 1fr;
`;

export const IconNeed = styled(I.Icon_need)`
  justify-content: center;
  display: grid;
`;

export const IconChoice = styled(I.Icon_choice)`
  justify-content: center;
  color: black;
`;

export const IconCheck1 = styled(IconCheck)`
  cursor: pointer;
`;

export const IconAllCheck = styled(I.Icon_check3)`
  justify-content: center;
  width: 10%;
  position: absolute;
  right: 0;
  color: black;
  cursor: pointer;
`;

export const ClauseAccept = styled(I.ClauseBtn)`
  width: 40%;
  right: 0;
  top: 100%;
  position: absolute;
  cursor: pointer;
`;
