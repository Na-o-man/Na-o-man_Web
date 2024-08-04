import styled, { keyframes } from 'styled-components';
import * as I from 'assets/icon';
import CloudLeft from 'assets/background/cloudLeft.png';
import CloudRight from 'assets/background/cloudRight.png';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(720deg);
  }
  70% {
    transform: rotate(1080deg);
  }
  85% {
    transform: rotate(1080deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: null;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloudLayout = styled.div<{ isRightCloud?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) =>
    props.isRightCloud ? CloudRight : CloudLeft});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopRectContainer = styled.div`
  position: relative;
  border: 1px solid blue;
  top: -3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopRect = styled(I.TopRect)`
  position: absolute;
  top: 0;
  transform: scale(0.8);
`;

export const DropDownContainer = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 4.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameBox = styled.div`
  color: #4e4e4e;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingLogo = styled.img`
  animation: ${rotate} 16s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`;

export const LoadingText = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;
