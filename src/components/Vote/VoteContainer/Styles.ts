import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const PictureBox = styled.div`
  width: 6.7rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  background: #969393;
`;

export const WinPictureBox = styled(PictureBox)`
  border: 3px solid #f9d067;
`;

export const VoterLayout = styled.div`
  width: 6.7rem;
  display: flex;
  flex-wrap: wrap;
`;

export const VoterContainer = styled.button`
  width: 1.2rem;
`;

export const VoterBox = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  background: #666;
  border-radius: 50%;
`;
