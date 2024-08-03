import * as I from 'assets/icon';
import styled from 'styled-components';

/*리스트 영역 */
export const nameLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 30;
  align-items: center;
`;

export const nameList = styled(I.File)`
  flex: 1;
  width: 200px;
  height: 200px;
  overflow-y: auto;
`;

export const nameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const name = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const nameButton = styled.button`
  flex-shrink: 0;
  position: relative;
  width: 20px;
  height: 20px;
  border: 0;
  background: none;
  font-size: 0;
  color: transparent;
`;

/*입력 영역 */

export const nameCreatelayout = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const MemberInput = styled(I.InputName)`
  position: fixed;
  z-index: 10;
`;
export const inputname = styled.input`
  display: inline-block;
  position: relative;
  padding: 0 37px 0 13px;
  width: 100%;
  height: 35px;
  background: none;
  z-index: 30;
  align-items: center;
`;

export const inputplus = styled(I.PlusCircle)`
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -10px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 20;
`;
