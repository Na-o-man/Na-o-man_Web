import * as I from 'assets/icon';
import styled from 'styled-components';

export const MemberTypeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const headingLayout = styled.div`
  position: relative;
  margin-bottom: 80px;
  width: 330px;
  text-align: center;
  justify-content: center;
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
  position: relative;
  top: 22%;
  text-decoration: underline;
  text-underline-offset: 15px;
`;

export const SelectText = styled.p`
  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  top: 26%;
`;

export const TypeListLayout = styled.div`
  position: relative;
  width: 350px;
  height: 300px;
`;

export const NextArrow = styled(I.NextArrowCircle)`
  position: absolute;
  bottom: calc(25% - 12px - 36.5px);
  right: calc(40% - 12.5px - 59px);
  z-index: 15;
  width: 9%; /* Adjust width as needed */
  height: 20%;
  cursor: pointer;
`;
