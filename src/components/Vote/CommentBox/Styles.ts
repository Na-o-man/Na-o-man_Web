import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
`;

export const TextLayout = styled.div`
  color: #1d3a72;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
`;

export const UserLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const IconLayout = styled.div`
  width: 1.65rem;
  height: 1.65rem;
  background: #666;
  border-radius: 50%;
  border: 2px solid white;
`;