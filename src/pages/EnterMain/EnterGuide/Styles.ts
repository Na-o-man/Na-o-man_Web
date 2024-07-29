import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  z-index: 50;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 50;
`;

export const GuideRect = styled(I.Guiderect)`
  width: 90%;
  height: 100%;
  left: 5%;
  position: absolute;
  z-index: 50;
`;

export const GuideTextUp = styled.div`
  z-index: 50;
  position: absolute;
  top: 26%;
  left: 50%;
  width: 80%;
  line-height: 1.7rem;
  color: black;
  font-size: 20px;
  text-align: center;
  font-weight: bolder;
  transform: translate(-50%, -50%);
`;

export const LineStar = styled(I.Line_star)`
  width: 80%;
  height: 60%;
  left: 10%;
  position: absolute;
  justify-content: center;
  z-index: 50;
`;

export const Line = styled(I.Line)`
  width: 80%;
  height: 110%;
  left: 10%;
  position: absolute;
  justify-content: center;
  z-index: 50;
`;

export const GuideContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  z-index: 50;
  position: absolute;
  left: 13%;
`;

export const GuideBox = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  top: 200%;
  background-color: gray;
  z-index: 55;
`;

export const GuideText = styled.div`
  position: absolute;
  display: grid;
  width: 70%;
  left: 13%;
  gap: 15px;
  grid-template-columns: 10px 130px 10px 120px;
  top: 50%;
  font-size: 12px;
  line-height: 1rem;
  font-weight: bold;
  color: black;
  z-index: 55;
`;

export const GuideTextDown = styled.div`
  z-index: 50;
  position: absolute;
  top: 60%;
  left: 50%;
  width: 71%;
  line-height: 1.7rem;
  color: black;
  font-size: 20px;
  text-align: center;
  font-weight: bolder;
  transform: translate(-50%, -50%);
`;

export const PhotoAdd = styled(I.Buttonrect)`
  z-index: 50;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const PhotoPlus = styled(I.AddBtn)`
  z-index: 50;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(150%, -50%);
  cursor: pointer;
`;

export const PhotoAddText = styled.div`
  z-index: 50;
  position: absolute;
  color: #4879af;
  top: 70%;
  left: 40%;
  font-weight: bolder;
  transform: translate(-30%, -50%);
  cursor: pointer;
`;
