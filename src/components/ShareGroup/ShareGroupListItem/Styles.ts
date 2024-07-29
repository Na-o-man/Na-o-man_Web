import styled from 'styled-components';
import * as I from 'assets/icon';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 84px;
  cursor: pointer;
  aspect-ratio: 295/ 84;
  padding: 0 1.25rem;
  top: 2.5rem;
`;

export const GroupList = styled(I.GroupList)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Container = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  position: relative;
  left: 20%;
  padding: 0.25rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
`;

export const Profile = styled(I.Profile)`
  position: absolute;
  top: 25%;
  left: 22.5%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.p`
  font-size: 1.25rem;
  color: #000;
  font-weight: 400;
`;

export const DateText = styled.p`
  font-size: 1rem;
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

export const PeopleIcon = styled(I.PeopleIcon)``;
