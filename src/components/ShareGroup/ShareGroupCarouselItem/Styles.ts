import styled, { css } from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  width: 65%;
  height: 14rem;
  padding: 3rem 5rem 0;
  cursor: pointer;
  ${(props) =>
    props.active
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0.7);
        `};
`;

export const SvgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Folder = styled(I.Folder)`
  width: 100%;
  position: absolute;
  top: -0.5rem;
  left: 0;
  z-index: 0;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 8rem;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
  z-index: 1;
`;

export const Profile = styled(I.Profile)`
  width: 100%;
  aspect-ratio: 1;
  z-index: 1;
`;

export const Name = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: #4e4e4e;
  z-index: 1;
`;
