import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  padding: 1.3rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.875rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(12px);
`;

export const TextLayout = styled.div`
  color: #1d3a72;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
`;

export const VoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
