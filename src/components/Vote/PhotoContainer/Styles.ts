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
  height: 13rem;
  display: flex;
  gap: 0.5rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  z-index: 1;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
`;

export const PicImg = styled.img`
  width: 7.5rem;
  height: 5rem;
  border-radius: 10px;
  object-fit: cover;
`;

export const ButtonLayout = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  padding: 0 0rem;
  gap: 0.5rem;
  z-index: 500;
`;

export const ListLayout = styled.div`
  width: 5.25rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  z-index: 500;
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
  font-size: 0.8rem;
  font-style: normal;
  cursor: pointer;
`;

export const TextLayout = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const TextContainer = styled.div`
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
`;

export const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 1;
  padding: 0 1.5rem;
  margin-top: 2rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  z-index: 500;
`;

export const PageDot = styled.div<{ active?: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? '#6E6BFF' : 'rgba(255, 255, 255, 0.5)'};
`;
