import styled, { css } from 'styled-components';

export const Layout = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  width: 33.33%;
  height: 100%;
  padding: 0 2rem;

  ${(props) =>
    props.active
      ? css`
          transform: scale(1);
          opacity: 1;
        `
      : css`
          transform: scale(0.8);
          opacity: 0.2;
        `}
`;

export const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
