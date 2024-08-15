/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components';
import * as I from 'assets/icon';
import CloudLeft from 'assets/background/cloudLeft.png';
import CloudRight from 'assets/background/cloudRight.png';
import { NavLink } from 'react-router-dom';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(720deg);
  }
  70% {
    transform: rotate(1080deg);
  }
  85% {
    transform: rotate(1080deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloudLayout = styled.div<{ isRightCloud?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) =>
    props.isRightCloud ? CloudRight : CloudLeft});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopRectContainer = styled.div`
  position: relative;
  border: 1px solid blue;
  top: -4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopRect = styled(I.TopRect)`
  position: absolute;
  top: 0;
  transform: scale(0.8);
`;

export const DropDownContainer = styled.div`
  width: 70px;
  position: absolute;
  top: 7rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameBox = styled.div`
  color: #4e4e4e;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingLogo = styled.img`
  animation: ${rotate} 16s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`;

export const LoadingText = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

export const DropDownLayout = styled.div`
  width: 70px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  cursor: pointer;
  z-index: 2;
`;

export const DropDownText = styled.div`
  position: absolute;
  top: 50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4e4e4e;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
`;

export const DropDownExpend = styled.div`
  width: 6rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const DropDownIcon = styled.div`
  position: absolute;
  top: 0.4rem;
  left: 0.8rem;
  cursor: pointer;
`;

export const DropDownList = styled.ul`
  width: 100%;
  padding: 0.5rem;
  padding-left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;

export const DropDownItem = styled.li`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
