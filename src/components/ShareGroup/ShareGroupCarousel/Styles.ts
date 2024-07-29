import styled, { css } from 'styled-components';

export const CarouselContainer = styled.div`
  height: 100%;
  margin: 2rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const CarouselTrack = styled.div<{
  offset: number;
  isDragging: boolean;
}>`
  display: flex;
  transition: ${(props) =>
    props.isDragging ? 'none' : 'transform 0.3s ease-out'};
  height: 70%;
  width: 100%;
  transform: translateX(${(props) => props.offset}px);
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#6E6BFF' : '#f6f6f6')};
  margin: 0 3px;
  cursor: pointer;
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
