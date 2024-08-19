import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Fly = styled(I.Fly)`
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px; /* 필요에 따라 크기 조정 */
  height: 24px;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 40%;
  text-decoration: underline;
  text-underline-offset: 10px;
`;

export const InputCountContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled(I.Input)`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 61%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 90%;
`;

export const InputCounterText = styled.input`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  bottom: 25%;
  text-align: center;
  align-items: center;
  color: #3c73ae;
  &::placeholder {
    color: #8ba5c1;
    font-weight: 500;
  }
`;

export const NextArrow = styled(I.NextArrowCircle)`
  width: 9%;
  cursor: pointer;
  position: absolute;
  bottom: 39%;
  right: 12%;
`;
