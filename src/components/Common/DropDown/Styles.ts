import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  noIndexTag?: boolean;
  txtlen: number;
}

export const Layout = styled.div<LayoutProps>`
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: 'relative';
  top: 10%;
  left: 0.5rem;
`;

export const TextLayout = styled.div<LayoutProps>`
  position: absolute;
  width: 100%;
  top: 50;
  left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: #4e4e4e;
  font-size: ${({ txtlen }) => (txtlen > 10 ? '0.7rem' : '0.8rem')};
  font-style: normal;
  font-weight: 700;
`;

export const ExpendLayout = styled.div<LayoutProps>`
  padding-right: 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  position: relative;
  top: 10%;
  left: 2rem;
  z-index: 2;
`;

export const IconLayout = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.8rem;
`;

export const ListLayout = styled.ul`
  width: 100%;
  padding: 0.5rem 0 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemLayout = styled.li`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 300;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
