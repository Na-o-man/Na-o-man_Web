import * as I from 'assets/icon';
import styled, { keyframes } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Fly = styled(I.Fly)`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
  height: 5%;

  /* 애니메이션 적용 */
  animation: ${rotate} 2s linear infinite;
`;

export const Text = styled.p`
  font-size: 0.7rem;
  color: #fefefe;
  position: absolute;
  top: 52%;
`;

<<<<<<< Updated upstream
export const NextArrow = styled(I.NextArrowCircle)`
=======
export const NextArrow = styled(I.NextArrow)`
>>>>>>> Stashed changes
  position: absolute;
  bottom: calc(23% - 12px - 36.5px);
  right: calc(38% - 12.5px - 59px);
  z-index: 15;
  width: 9%; /* Adjust width as needed */
  height: 9%;
`;
