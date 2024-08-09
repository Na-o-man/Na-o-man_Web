import styled from 'styled-components';
import cloudRight from 'assets/background/cloudRight.png';
import { Fly, CloudBtn } from 'assets/icon';

export const Container = styled.div`
  aspect-ratio: 430 / 932;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Layout = styled.div`
  background-image: url(${cloudRight});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`; // 배경

export const StyledFly = styled(Fly)`
  margin-right: 9px;
  width: 15.255px;
  height: 18.686px;
`;

export const Textstyeld = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 100px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding-right: 42px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-right: 50px;
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

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const PageDot = styled.div<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? '#6E6BFF' : 'rgba(255, 255, 255, 0.5)'};
`;
