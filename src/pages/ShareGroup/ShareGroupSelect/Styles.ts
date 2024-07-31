import styled from 'styled-components';
import CloudLeft from 'assets/background/cloudLeft.png';
import CloudRight from 'assets/background/cloudRight.png';

export const CloudLayout = styled.div<{ isRightCloud?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  background-image: url(${(props) =>
    props.isRightCloud ? CloudRight : CloudLeft});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
