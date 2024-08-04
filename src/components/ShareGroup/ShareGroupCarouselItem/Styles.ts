import styled, { css } from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  width: 100%;
  height: 272px;
  padding: 0 5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  ${(props) =>
    props.active
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0.8);
        `};
`;

export const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Folder = styled(I.Folder)`
  position: absolute;
  top: -0.5rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 140px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const Profile = styled(I.Profile)`
  width: 140px;
  aspect-ratio: 1;
`;

export const Name = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1.5rem;
  color: #4e4e4e;
`;
