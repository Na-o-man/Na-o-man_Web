import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative; /* 부모 컨테이너를 기준으로 자식 요소들 위치 설정 */
`;

export const Inputnamecontainer = styled.div`
  display: flex;
  position: absolute;
  top: 10%;
  width: 100%; /* 필요한 경우 너비 조정 */
  justify-content: center; /* 중앙 정렬 */
`;

export const InputProfile = styled(I.InputProfile)`
  position: relative; /* 부모 컨테이너를 기준으로 위치 조정 */
  top: 0;
  left: 8%;
  width: 30%;
  height: auto;
  z-index: 10;
`;

export const InputName = styled(I.InputName)`
  position: relative; /* 부모 컨테이너를 기준으로 위치 조정 */
  top: 10%;
  left: 64%;
  width: 150%;
  height: auto;
`;

export const InputNameText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  position: relative; /* 부모 컨테이너를 기준으로 위치 조정 */
  top: -25.5%;
  left: 7%;
`;

export const InputnameBox = styled.div`
  display: flex;
  flex-direction: column; /* 필요에 따라 방향 설정 */
  align-items: center; /* 중앙 정렬 */
`;

export const UnderBar = styled(I.UnderBar)`
  position: relative; /* 부모 컨테이너를 기준으로 위치 조정 */
  top: 27px;
  right: 30%;
  width: 100%;
  height: auto;
`;
