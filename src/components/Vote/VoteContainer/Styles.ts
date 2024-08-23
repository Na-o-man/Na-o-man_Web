import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const PictureBox = styled.img`
  width: 6.5rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  background: #969393;
  object-fit: cover;
`;

export const WinPictureBox = styled(PictureBox)`
  border: 3px solid #f9d067;
`;
