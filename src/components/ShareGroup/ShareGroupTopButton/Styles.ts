import styled from 'styled-components';
import * as I from '../../../assets/icon';

export const TopBtn = styled(I.TopBtn)`
  position: absolute;
`;

export const Layout = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 400;
`;

export const DateText = styled.p`
  font-size: 11px;
  color: #fff;
  font-weight: 400;
`;

export const DateBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PeopleCountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const PeopleIcon = styled(I.PeopleIcon)`
  transform: scale(0.75);
`;
