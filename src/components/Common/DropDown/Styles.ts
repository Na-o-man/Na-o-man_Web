import styled from 'styled-components';

export const Layout = styled.div`
  width: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: absolute;
  top: 10%;
  left: 0;
`;

export const TextLayout = styled.div`
  position: absolute;
  top: 50;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4e4e4e;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
`;

export const ExpendLayout = styled.div`
  padding-right: 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  position: absolute;
  left: 8%;
  top: 10%;
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
`;
