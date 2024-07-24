import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  position: absolute;
  top: calc(100% - 3.5rem);
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const BottomBar = styled(I.BottomBar)`
  position: absolute;
  bottom: 0;
`;

export const Symbol = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  bottom: 1.5px;
`;

export const FilledCloudButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -1rem;
`;

export const FilledCloudButton = styled(I.FilledCloudBtn)`
  position: absolute;
`;

export const FilledCloudButtonText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #4879af;
  position: relative;
  top: 0.25rem;
  z-index: 1;
`;
