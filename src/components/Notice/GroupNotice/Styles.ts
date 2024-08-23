import * as I from 'assets/icon';
import styled from 'styled-components';

export const ListContainer = styled.div<{ read: boolean }>`
  opacity: ${({ read }) => (read ? 0.5 : 1)}; // read 상태에 따라 opacity 조정
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 4rem;
  backdrop-filter: blur(10px);
`;

export const GroupList = styled(I.NewAlarm)`
  width: 100%;
  position: absolute;
  top: -45%;
`;

export const Profile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 1rem;
  border: 1px solid white;
  z-index: 500;
`;
export const Text = styled.div`
  width: 60%;
  color: black;
  font-weight: 500;
  line-height: 1.3;
  font-size: 10px;
  z-index: 500;
`;
