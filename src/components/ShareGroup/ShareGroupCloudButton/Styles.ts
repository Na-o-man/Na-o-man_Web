import styled from 'styled-components';
import * as I from '../../../assets/icon';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const CloudBtn = styled(I.CloudBtn)`
  position: absolute;
  transform: scale(0.9);
`;

export const MiddleCloudBtn = styled(CloudBtn)`
  transform: scale(1.2);
`;

export const MiddleButtonText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  text-align: center;
  line-height: 1.125;
`;

export const ButtonText = styled(MiddleButtonText)`
  font-size: 13px;
`;
