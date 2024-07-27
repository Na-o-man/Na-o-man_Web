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
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  background-image: null;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloudLayout = styled.div<{ isRightCloud?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
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
  top: -3.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopRect = styled(I.TopRect)`
  position: absolute;
  top: 0;
  transform: scale(1.1);
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 0;
  margin: 0 auto;
  display: flex;
  text-align: center;
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
