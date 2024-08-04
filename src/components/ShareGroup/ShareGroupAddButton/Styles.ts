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

export const MiddleRectangle = styled(I.MiddleRectangle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MiddleContainer = styled.div`
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  padding: 1.25rem 0;
`;

export const AddGroupBtn = styled(I.AddGroupBtn)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AddGroupBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  height: 57px;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #fefefe;
  text-align: center;
`;

export const AddGroupBtnText = styled.p`
  font-size: 15px;
  color: #8ba5c1;
  text-align: center;
  z-index: 10;
`;

export const Cloud = styled(I.Cloud)`
  position: absolute;
  bottom: calc(50% - 132px - 36.5px);
  right: calc(50% - 147.5px - 59px);
  z-index: 10;
  filter: drop-shadow(0px 6px 10px rgba(138, 138, 138, 0.25));
`;

export const RectContainer = styled.div`
  position: absolute;
  bottom: 9rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
