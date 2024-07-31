import styled from 'styled-components';
import CloudLeft from 'assets/background/cloudLeft.png';
import CloudRight from 'assets/background/cloudRight.png';
import * as I from 'assets/icon';

interface LayoutProps {
  isRightCloud?: boolean;
}

export const Layout = styled.div<LayoutProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) =>
    props.isRightCloud ? CloudRight : CloudLeft});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Cloud = styled(I.Cloud)`
  position: absolute;
  left: 0;
  top: -1rem;
  z-index: 0;
  transform: scale(0.8);
  filter: drop-shadow(0 6px 10px rgba(138, 138, 138, 0.25));
`;

export const CloudContainer = styled.div`
  position: relative;
  width: 432px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;
