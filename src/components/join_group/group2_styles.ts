import styled from 'styled-components';
import cloudRight from 'assets/background/cloudRight.png';
import { Folder2, Fly, FileNameBox, Cloude2 } from 'assets/icon';

export const Layout = styled.div`
  background-image: url(${cloudRight});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  aspect-ratio: 430 / 932;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StyledFly = styled(Fly)`
  margin-right: 9px;
  width: 15.255px;
  height: 18.686px;
`;

export const Textstyeld = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
`;

export const Stylefolder = styled(Folder2)`
  width: 288.959px;
  height: 282px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;
export const StyleFilename = styled.div`
  color: #134b80;
  font-weight: 600;
  width: 233px;
  height: 45.07px;
  flex-shrink: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 15px;
  border: none;
  margin-bottom: 75px;
  background: rgba(255, 255, 255, 0.55);
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
`;
export const StyleButton = styled.button`
  width: 83px;
  height: 39px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  border-radius: 20px;

  font-weight: 600;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  margin-right: 10px;
  backdrop-filter: blur(2px);

  border-bottom: 3px solid white;
`;

export const StyleButton2 = styled.button`
  width: 83px;
  height: 39px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #457aae;
  font-size: 14px;
  font-weight: 600;
  border: none;

  background: linear-gradient(
      246deg,
      rgba(255, 255, 255, 0.5) 17.43%,
      rgba(255, 255, 255, 0.1) 82.57%
    ),
    rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);

  border-bottom: 3px solid white; /* 하단 테두리 완전히 하얗게 설정 */
`;
export const ButtonBox = styled.div`
  display: flex;

  width: 100%;
  padding: 0 82px;
`;

export const PictureBox = styled.div`
  display: flex;
  z-index: 2;
  position: relative;
  justify-content: center;
  margin-top: 65px;

  width: 200px;
  height: 80px;
`;

export const FolderBox = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 260px;
  margin-bottom: 35px;
  z-index: 1;
  position: relative;
`;

export const StyleCloud = styled(Cloude2)`
  position: absolute;
  width: 37px;
  height: 22.83px;
  z-index: 3;
  ${({ style }) => style && { ...style }};
  bottom: 10px;
`;

export const StyleCount = styled.div`
  position: absolute;
  width: 37px;
  height: 22.83px;
  font-size: 9px;
  color: #000;
  z-index: 3;
  ${({ style }) => style && { ...style }};
  bottom: 5px;
`;
