import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: '100%';
  height: '100%';
  display: flex;
  justify-content: center;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

export const GuideRect = styled(I.Guiderect)`
  width: 90%;
  height: 100%;
  position: absolute;
  justify-content: center;
  z-index: 5;
`;

export const GuideTextUp = styled.div`
  z-index: 10;
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
  position: absolute;
  justify-content: center;
  z-index: 10;
`;

export const Line = styled(I.Line)`
  width: 80%;
  height: 110%;
  position: absolute;
  justify-content: center;
  z-index: 10;
`;

export const GuideContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
`;

export const GuideBox = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  top: 200%;
  background-color: gray;
  z-index: 15;
`;

export const GuideText = styled.div`
  position: absolute;
  display: grid;
  width: 70%;
  gap: 15px;
  grid-template-columns: 10px 130px 10px 120px;
  top: 50%;
  font-size: 12px;
  line-height: 1rem;
  font-weight: bold;
  color: black;
  z-index: 15;
`;

export const GuideTextDown = styled.div`
  z-index: 10;
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
  transform: translate(-20%, -50%);
`;
