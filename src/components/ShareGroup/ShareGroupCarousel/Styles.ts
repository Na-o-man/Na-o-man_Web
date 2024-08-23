import styled, { css } from 'styled-components';

export const CarouselContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
`;

export const CarouselTrack = styled.div<{
  offset: number;
  isDragging: boolean;
}>`
  display: flex;
  transition: ${(props) =>
    props.isDragging ? 'none' : 'transform 0.3s ease-out'};
  transform: translateX(${(props) => props.offset}px);
`;

export const CarouselBlankItem = styled.div<{ isRight?: boolean }>`
  margin-right: ${(props) => (props.isRight ? '18%' : 0)};
  margin-left: ${(props) => (props.isRight ? 0 : '18%')};
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
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
