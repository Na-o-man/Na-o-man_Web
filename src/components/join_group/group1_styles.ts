import { CloudBtn } from 'assets/icon';
import { Fly } from 'assets/icon';
import cloudRight from 'assets/background/cloudRight.png';

import { Input } from 'assets/icon';
import styled from 'styled-components';

export const Container = styled.div`
  aspect-ratio: 430 / 932;
  display: flex;
  justify-content: center;
  //align-items: center;
  flex-direction: column;
`;

export const Layout = styled.div`
  background-image: url(${cloudRight});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`; //배경

export const StyledFly = styled(Fly)`
  margin-right: 9px;
  width: 15.255px;
  height: 18.686px;
`;

export const StyledInput = styled(Input)`
  margin-top: 18px;
  width: 295px;
  height: 55px;
`;

export const ContentBox = styled.div`
  display: flex;
  margin-left: 64px;
`;

export const StyledBtn = styled(CloudBtn)`
  width: 78px;
  height: 48px;
  margin-top: 21px;
`;

export const Textstyeld = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 32px;
`;
