import styled from 'styled-components';
import * as I from 'assets/icon';

interface TProps {
  isLong?: boolean;
}

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
  z-index: 1;
`;

export const GroupList = styled(I.GroupList)`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

export const Container = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  position: relative;
  left: 0.5rem;
  padding: 0.25rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
`;

export const Profile = styled(I.Profile)`
  position: relative;
  top: -1.25rem;
`;

export const ProfileImage = styled.img`
  width: 93px;
  height: 93px;
  border-radius: 50%;
  border: 1px solid #fff;
  object-fit: cover;
  position: relative;
  top: -1.25rem;
  z-index: 10;
`;

export const Title = styled.p<TProps>`
  font-size: ${({ isLong }) => (isLong ? '14px' : '13px')};
  color: #000;
  font-weight: 400;
  line-height: 1rem;
`;

export const DateText = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
`;

export const DateBox = styled.div`
  width: 100%;
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
