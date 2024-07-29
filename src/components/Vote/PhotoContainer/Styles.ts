import styled from 'styled-components';

export const Layout = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PicContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 1;
  padding: 0 1.5rem;
  margin-top: 2rem;
`;

export const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 0.6rem;
  gap: 0.5rem;
`;

export const ListLayout = styled.div`
  width: 5.25rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
`;

export const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const ItemLayout = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  cursor: pointer;
`;
