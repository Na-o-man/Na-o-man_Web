import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
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
