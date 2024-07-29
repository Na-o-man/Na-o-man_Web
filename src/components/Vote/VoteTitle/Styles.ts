import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TextContainer = styled.div<{ clicked?: boolean }>`
  z-index: 1;
  position: absolute;
  color: ${(props) => (props.clicked ? 'black' : '#1d3a72')};
  font-size: 0.9rem;
  font-style: normal;
  font-weight: ${(props) => (props.clicked ? '700' : '600')};
`;
