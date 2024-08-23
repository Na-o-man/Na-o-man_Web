import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const GuideRect = styled(I.Guiderect)`
  width: 90%;
  height: 100%;
  left: 5%;
  position: absolute;
`;

export const GuideTextUp = styled.div`
  position: absolute;
  top: 27%;
  left: 50%;
  width: 80%;
  line-height: 1.7rem;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
  transform: translate(-50%, -50%);
`;

export const LineStar = styled(I.Line_star)`
  width: 80%;
  height: 60%;
  left: 10%;
  position: absolute;
  justify-content: center;
`;

export const Line = styled(I.Line)`
  width: 77%;
  height: 115%;
  left: 10%;
  position: absolute;
  justify-content: center;
`;

export const GuideContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.2rem;
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translateX(-50%);
`;

export const GuideBox = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  position: relative;
  object-fit: cover;
`;

export const GuideCaption = styled.div`
  width: 5.4rem;
  text-align: center;
  font-size: 0.6rem;
`;

export const GuideText = styled.div`
  position: absolute;
  display: grid;
  width: 90%;
  justify-content: center;
  gap: 0.5rem;
  grid-template-columns: 1fr 14fr;
  top: 48%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 400;
  padding: 0 2rem;
`;

export const GuideTextDown = styled.div`
  position: absolute;
  top: 63%;
  left: 50%;
  width: 90%;
  line-height: 1.4rem;
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  transform: translate(-50%, -50%);
`;

export const PhotoAdd = styled(I.Buttonrect)`
  width: 45%;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const PhotoPlus = styled(I.AddBtn)`
  position: absolute;
  width: 7%;
  top: 70%;
  left: 52%;
  transform: translate(150%, -50%);
  cursor: pointer;
`;

export const PhotoAddText = styled.div`
  position: absolute;
  color: #4879af;
  top: 70%;
  left: 42%;
  font-size: 0.9rem;
  font-weight: bolder;
  transform: translate(-30%, -50%);
  cursor: pointer;
`;
