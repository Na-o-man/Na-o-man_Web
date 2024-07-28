import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  background-color: transparent;
  backdrop-filter: blur(10px);
  margin: 0px;
`;

export const GroupList = styled(I.NewAlarm)`
  display: block;
  position: absolute;
  z-index: 0;
`;

export const Profile = styled(I.Profile)`
  display: block;
  height: auto;
  padding: 20px;
  position: relative;
  z-index: 10;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 41%;
  text-align: left;
  transform: translate(-20%, -50%);
  color: black;
  font-weight: bolder;
  line-height: 1.3;
  font-size: 13px;
  z-index: 10;
`;
