import styled, { keyframes } from 'styled-components';

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
