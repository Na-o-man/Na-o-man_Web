import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  justify-items: center;
  position: relative;
`;

export const PictureBox = styled.img<{ ismost: boolean }>`
  width: 7rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: ${(props) => (props.ismost ? '3px solid #F9D067' : 'none')};
  background: #969393;
  object-fit: cover;
`;
