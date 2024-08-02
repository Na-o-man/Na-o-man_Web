import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Fly = styled(I.Fly)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
`;

export const Text = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 43%;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

export const InputCountContainer = styled.div`
  display: flex;
`;

export const Input = styled(I.Input)`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 90%;
`;

export const InputCounterText = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  top: 52%;
  left: 30%;
  text-align: center;
  z-index: 10;
`;

<<<<<<< Updated upstream
export const NextArrow = styled(I.NextArrowCircle)`
=======
export const NextArrow = styled(I.NextArrow)`
>>>>>>> Stashed changes
  position: absolute;
  bottom: calc(38% - 12px - 36.5px);
  right: calc(32% - 12.5px - 59px);
  z-index: 15;
  width: 9%; /* Adjust width as needed */
  height: 9%;
<<<<<<< Updated upstream
  cursor: pointer;
=======
>>>>>>> Stashed changes
`;
