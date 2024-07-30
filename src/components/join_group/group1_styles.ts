import { CloudBtn } from 'assets/icon';
import { Fly } from 'assets/icon';
import cloudRight from 'assets/background/cloudRight.png';
import { Input } from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  background-image: url(${cloudRight});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`; //배경

export const Container = styled.div`
  aspect-ratio: 430 / 932;
  display: flex;
  justify-content: center;
  //align-items: center;
  flex-direction: column;
`;

export const StyledFly = styled(Fly)`
  margin-right: 9px;
  width: 15.255px;
  height: 18.686px;
`;

export const ContentBox = styled.div`
  display: flex;
  margin-left: 27px;
`;

export const Textstyeld = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledInput = styled(Input)`
  margin-top: 18px;
  width: 295px;
  height: 55px;
`;

export const UrlInput = styled.input`
  position: absolute;
  top: 18px;

  width: 283px;
  height: 55px;
  border: none;
  text-align: center;
  background-color: transparent;
  z-index: 1;
  font-size: 11px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
  }
`;

export const ButtonBox = styled.div`
  display: flex;

  flex-direction: row-reverse;
  margin-right: 32px;
`;

export const StyledBtn = styled(CloudBtn)`
  width: 78px;
  height: 48px;
  margin-top: 21px;
`;

export const NextButton = styled.button`
  border: none;
  text-align: center;
  background-color: transparent;
  width: 78px;
  height: 48px;
  margin-top: 21px;
  position: absolute;
  z-index: 1;
  color: white;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
`;
