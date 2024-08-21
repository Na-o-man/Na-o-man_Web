import styled from 'styled-components';
import * as I from 'assets/icon';
import face from 'assets/design/face.png';
import sideface from 'assets/design/sideface.png';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const GuideRect = styled(I.Photorect)`
  width: 90%;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
`;

export const GuideTextUp = styled.div`
  position: absolute;
  top: 32%;
  left: 50%;
  width: 80%;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 600;
  transform: translate(-50%, -50%);
`;

export const Line = styled(I.Line)`
  width: 80%;
  height: 70%;
  left: 10%;
  position: absolute;
  justify-content: center;
`;

export const GuideContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translateX(-50%);
`;

export const GuideBox = styled.img`
  width: 6rem;
  height: 6rem;
  position: absolute;
  border-radius: 5%;
  background-size: cover;
  z-index: 0;
`;

export const GuideBox1 = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  border-radius: 5%;
  background: url(${face}) no-repeat;
  background-size: cover;
`;

export const GuideBox2 = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  border-radius: 5%;
  background: url(${sideface}) no-repeat;
  background-size: cover;
`;

export const GuideImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
  position: absolute;
  object-fit: cover;
  z-index: 10;
`;

export const CloseBtn = styled(I.CloseModal)`
  position: absolute;
  top: -10%;
  right: 0;
  cursor: pointer;
  width: 15%;
  z-index: 100;
`;

export const SubmitBtn = styled(I.Buttonrect)`
  height: 7%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const SubmitBtnText = styled.div`
  position: absolute;
  color: #4879af;
  top: 65%;
  left: 50%;
  font-weight: bolder;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const PhotoAddBtn = styled(I.ButtonSmall)`
  position: absolute;
  width: 25%;
  top: 53%;
  right: 15%;
  cursor: pointer;
`;

export const PhotoAddText = styled.div`
  position: absolute;
  width: 25%;
  top: 54.9%;
  right: 12%;
  color: #4879af;
  font-weight: bolder;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const PhotoPlus = styled(I.AddSmall)`
  width: 4%;
  height: 4%;
  position: absolute;
  top: 53.7%;
  right: 18%;
  cursor: pointer;
`;
