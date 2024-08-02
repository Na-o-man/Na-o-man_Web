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
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 22%;
  text-decoration: underline;
  text-underline-offset: 20px;
`;

export const SelectText = styled.p`
  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 24%;
`;

interface ContainerProps {
  top?: string;
  left?: string;
}

export const TypeContainer = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
`;

export const GroupBtn = styled(I.GroupBtn)`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const InputTypeText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  z-index: 10;
  writing-mode: vertical-lr;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const InputTypeContainer = styled.div`
  display: flex;
`;

export const InputGroupType = styled(I.InputGroupType)`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 90%;
`;

export const InputGroupTypeText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 57%;
  left: 30%;
  text-align: center;
  z-index: 10;
  transform: translate(-80%, 20%);
`;

<<<<<<< Updated upstream
export const NextArrow = styled(I.NextArrowCircle)`
=======
export const NextArrow = styled(I.NextArrow)`
>>>>>>> Stashed changes
  position: absolute;
  bottom: calc(36% - 12px - 36.5px);
  right: calc(35% - 12.5px - 59px);
  z-index: 15;
  width: 9%; /* Adjust width as needed */
  height: 9%;
<<<<<<< Updated upstream
  cursor: pointer;
=======
>>>>>>> Stashed changes
`;
