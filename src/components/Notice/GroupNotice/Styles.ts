import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  background-color: transparent;
  backdrop-filter: blur(10px);
  margin: 0px;

  cursor: pointer;
`;

export const ListContainer = styled.div<{ read: boolean }>`
  opacity: ${({ read }) => (read ? 0.5 : 1)}; // read 상태에 따라 opacity 조정
`;

export const GroupList = styled(I.NewAlarm)`
  display: block;
  position: absolute;
`;

export const Profile = styled.img`
  position: relative;
  width: 15%;
  height: 15%;
  border-radius: 50%;
  margin-top: 45px;
  top: 35%;
  left: 13%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

export const Text = styled.div`
  position: absolute;
  top: 48%;
  left: 41%;
  text-align: left;
  transform: translate(-25%, -50%);
  color: black;
  font-weight: bolder;
  line-height: 1.3;
  font-size: 13px;
  z-index: 10;
`;
