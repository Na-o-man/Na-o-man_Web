import styled from 'styled-components';

export const Layout = styled.div<{ selected: boolean }>`
  border: ${({ selected, theme }) =>
    selected ? `5px solid ${theme.colors.accent}` : '1px solid #fff'};
  width: 100%;
  height: 6rem;
  border-radius: 18px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
`;
