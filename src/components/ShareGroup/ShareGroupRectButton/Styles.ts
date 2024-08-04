import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: red;
`;

export const Rect = styled(I.Rectangle)`
  position: absolute;
`;

export const RectText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  position: relative;
  z-index: 10;
`;
