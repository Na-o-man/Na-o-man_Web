import * as I from 'assets/icon';
import styled from 'styled-components';

export const MemberNameLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  height: 100vh;
`;

export const headingLayout = styled.div`
  margin-bottom: 90px;
  width: 330px;
  text-align: center;
`;

export const Fly = styled(I.Fly)`
  display: inline-block; /* SVG를 인라인 블록으로 표시 */
  vertical-align: middle; /* 수직 정렬을 맞춤 */
  width: 24px; /* 필요에 따라 크기 조정 */
  height: 24px; /* 필요에 따라 크기 조정 */
  margin: 10 auto;
  margin-bottom: 19px;
`;

export const Text = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 22%;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

export const InportNameContainer = styled.div`
  display: absolute;
  justify-content: center;
  z-index: 10;
`;

export const InportNameBox = styled.div`
  top: -110px;
  left: 40px;
`;

export const ListLayout = styled.div`
  position: relative;
  width: 350px;
  height: 400px;
`;

export const File = styled(I.File)`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
