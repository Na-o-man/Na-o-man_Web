import * as I from 'assets/icon';
import styled from 'styled-components';

/*리스트 영역 */
export const TypeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
`;

export const TypeList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 150px;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: none;
  flex-wrap: wrap;
  bottom: 30px;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  position: relative;
  background: none;
  width: 82px; /* 고정된 너비 */
  height: 30px; /* 고정된 높이 */
  &:hover .TypeButton {
    display: inline;
  }
`;

export const NowImportType = styled(I.GroupBtn)`
  position: absolute;
  width: 71px;
  z-index: 0;
  align-items: center;
`;

export const SelectType = styled(I.SelectType)`
  position: absolute;
  width: 71px;
  z-index: 0;
  align-items: center;
`;

export const Type = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 5;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
`;

/*입력 영역 */

export const TypeCreateLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 150px;
  align-items: center;
  justify-content: center;
`;

export const TypeInput = styled(I.InputGroupType)`
  position: relative;
  width: 250px;
  z-index: 10;
`;

export const inputType = styled.input`
  display: inline-block;
  position: relative;
  padding: 0 20px 0 30px;
  width: 100%;
  height: 40px;
  background: none;
  z-index: 30;
  bottom: 39px;
  align-items: center;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;
