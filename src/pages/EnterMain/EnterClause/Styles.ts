import styled from 'styled-components';
import * as I from 'assets/icon';

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
  top: 22%;
`;

export const TitleBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: auto;
  position: absolute;
  top: 55%;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 35;
  color: #7b7b7b;
  margin: 0;
  padding: 50px 0;
  grid-template-columns: 230px 10px;
`;

export const Text = styled.div`
  z-index: 36;
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

export const IconCheck1 = styled(I.Icon_check1)`
  z-index: 35;
  justify-content: center;
  color: black;
  cursor: pointer;
`;

export const IconCheck3 = styled(I.Icon_check3)`
  z-index: 35;
  justify-content: center;
  color: black;
  cursor: pointer;
`;
