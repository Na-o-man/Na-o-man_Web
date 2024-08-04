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
