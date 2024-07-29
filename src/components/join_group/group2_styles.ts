import styled from 'styled-components';
import cloudRight from 'assets/background/cloudRight.png';
import { Folder2, Fly, FileNameBox } from 'assets/icon';
import Picture from './picture';

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
  background-color: black;
`;

export const Stylefolder = styled(Folder2)`
  width: 288.959px;
  height: 282px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  border-radius: 48.5px;
  border: none;
  margin-bottom: 75px;
  background: linear-gradient(
    84deg,
    rgba(255, 255, 255, 0.3) 44.62%,
    rgba(255, 255, 255, 0.7) 99.93%
  );
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
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
  border: 2px solid #fff;
  font-weight: 600;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  margin-right: 10px;
`;

export const StyleButton2 = styled.button`
  width: 83px;
  height: 39px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  color: #457aae;
  font-size: 14px;
  border: 2px solid #fff;
  font-weight: 600;
  background: linear-gradient(
      246deg,
      rgba(255, 255, 255, 0.5) 17.43%,
      rgba(255, 255, 255, 0.1) 82.57%
    ),
    rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
`;

export const ButtonBox = styled.div`
  display: flex;

  width: 100%;
  padding: 0 82px;
`;

export const PictureBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 65px;
`;

export const OverlappingPicture = styled(Picture)`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  z-index: 1;

  // 아이템들이 겹치도록 위치 조정
  &:nth-of-type(1) {
    left: 0;
  }

  &:nth-of-type(2) {
    left: 30px; // 첫 번째 아이템과 겹치도록 위치 조정
  }

  &:nth-of-type(3) {
    left: 60px; // 두 번째 아이템과 겹치도록 위치 조정
  }
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
