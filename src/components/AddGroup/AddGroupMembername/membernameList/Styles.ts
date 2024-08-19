import * as I from 'assets/icon';
import styled from 'styled-components';

/*리스트 영역 */
export const nameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const nameList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  padding: 2rem 0;
  width: 190px;
  height: 140px;
  align-items: center;
  justify-content: center;
  z-index: 10;
  flex-wrap: wrap;
  top: 40px;
`;

export const nameFolder = styled(I.File)`
  position: absolute;
  width: 58%;
  z-index: 0;
  align-items: center;
`;

export const nameContainer = styled.div`
  display: flex;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
  z-index: 30;
  background: none;
  margin: 1px;
  width: 55px; /* 고정된 너비 */
  height: 20px; /* 고정된 높이 */
  &:hover .nameButton {
    display: inline;
  }
`;

export const NowImportName = styled(I.NowInportName)`
  position: absolute;
  width: 60%;
  z-index: 0;
  align-items: center;
`;

export const name = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 5;
  font-size: 0.8rem;
  font-weight: 700;
  color: #3c73ae;
`;

export const nameButton = styled(I.xCircle)`
  flex-shrink: 0;
  position: relative;
  width: 12px;
  height: 20px;
  border: 0;
  background: none;
  font-size: 10;
  color: black;
  cursor: pointer;
  display: none;
`;

/*입력 영역 */

export const nameCreatelayout = styled.div`
  position: absolute;
  margin-top: 210px;
  align-items: center;
`;

export const MemberInput = styled(I.InputName)`
  position: absolute;
  left: -0.5rem;
  z-index: 10;
`;

export const inputname = styled.input`
  display: inline-block;
  position: relative;
  padding: 0 25px;
  width: 100%;
  height: 40px;
  background: none;
  z-index: 30;
  align-items: center;
  font-weight: 500;
  color: #3c73ae;
  &::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
    opacity: 1;
    font-weight: 500;
  }
`;

export const inputplus = styled(I.PlusCircle)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15%;
  cursor: pointer;
  z-index: 30;
`;
