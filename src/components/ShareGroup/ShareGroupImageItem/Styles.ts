import styled from 'styled-components';

export const Layout = styled.div<{ selected: boolean; checked: boolean }>`
  border: ${({ selected, theme }) =>
    selected ? `5px solid ${theme.colors.accent}` : '1px solid #fff'};
  width: 100%;
  height: 6rem;
  border-radius: 18px;
  overflow: hidden;
  border: ${({ checked }) => (checked ? '5px solid #F9D067' : 'none')};
  cursor: pointer;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(66, 85, 92, 0.6);
`;

export const Image = styled.img<{ isdownload: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isdownload }) => (isdownload ? '0.5' : '1')};
`;
