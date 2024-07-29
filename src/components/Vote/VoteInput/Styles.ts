import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  margin-top: 2rem;
`;

export const TitleContainer = styled.div`
  width: 30%;
  color: #4e4e4e;
  text-align: center;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 700;
  z-index: 1;
`;

export const InputContainer = styled.input`
  width: 100%;
  z-index: 1;
  &::placeholder {
    color: #969393;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 300;
  }
`;
