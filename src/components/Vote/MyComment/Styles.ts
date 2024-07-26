import styled, { keyframes, css } from 'styled-components';

/** 가로 길이 확장 */
const expandAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 90%;
  }
`;
/** 가로 길이 축소 */
const reduceAnimation = keyframes`
  0% {
    width: 90%;
  }
  100% {
    width: 1.75rem;
  }
`;

const showAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Layout = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const Component = styled.div<{ opening?: boolean }>`
  height: 1.75rem;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(12px);

  gap: 0.2rem;
  animation: ${(props) =>
    props.opening
      ? css`
          ${expandAnimation} 0.1s forwards
        `
      : css`
          ${reduceAnimation} 0.1s forwards
        `};
`;

export const TextBox = styled.div`
  color: #1d3a72;
  font-size: 0.65rem;
  font-weight: 600;
  animation: ${showAnimation} 0.1s forwards;
`;

export const VoterBox = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  background: #666;
  border-radius: 50%;
  border: 2px solid white;
`;

export const CloseIconBox = styled.div`
  position: absolute;
  top: 50;
  right: 5%;
  cursor: pointer;
`;
