import * as I from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AddFileContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const File = styled(I.File)`
  width: 60%;
  height: 100%;
`;

export const AddFileText = styled.p`
  font-size: 1.3rem;
  color: #134b80;
  position: absolute;
  z-index: 10;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const CopyCloudContainer = styled.div`
  display: flex;
  z-index: 20;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  top: 10%;
  left: 40%;
  width: 100%;
  height: 100%;
`;

export const Cloud = styled(I.Cloud)`
  position: relative;
  z-index: 20;
  width: 30%;
  height: 10%;
`;
export const CloudButton = styled.button`
  position: absolute; // 절대 위치
  left: 83px; // Cloud의 왼쪽에 맞추기
  width: 30%;
  height: 10%;
  background-color: transparent;
  border: none; // 테두리 없음
  z-index: 40; // Cloud보다 위에 위치

  &:focus {
    outline: none; // 포커스 아웃라인 제거
  }

  // 버튼 위에 마우스를 올리면 커서가 손바닥 모양으로 변경
  &:hover {
    cursor: pointer; // 호버 시 손바닥 모양으로 변경
  }
`;

export const CopyCloudText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  text-align: center;
  z-index: 30;
  right: 25%;
  top: 1.5%;
  font-weight: bold;
`;

export const Copy = styled(I.Copy)`
  position: relative;
  z-index: 30;
  width: 4%;
  right: 25%;
  top: 1.5%;
  height: 40%;
  z-index: 30;
`;

export const InviteContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 20%;
  width: 100%;
  height: 100%;
`;

export const InviteBar = styled(I.InviteBar)`
  position: relative;
  z-index: 20;
  width: 60%;
  height: 40%;
`;

export const InviteText = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  position: relative;
  z-index: 30;
  font-weight: bold;
  bottom: 21%;
`;

export const InviteBar2 = styled(I.InviteBar)`
  position: relative;
  z-index: 20;
  width: 60%;
  height: 40%;
  top: 10%;
`;

export const InviteText2 = styled.p`
  font-size: 0.7rem;
  color: #134b80;
  position: relative;
  text-align: center;
  z-index: 30;
  font-weight: bold;
  bottom: 11%;
`;
