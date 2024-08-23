import { CloseBtnRound } from 'assets/icon';
import styled from 'styled-components';

export const Layout = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  gap: 1.5rem 0.5rem;
`;

export const VoteContainer = styled.div`
  display: grid;
  position: relative;
  top: 10%;
  grid-template-columns: 8.5rem 8.5rem;
  grid-template-rows: repeat(auto-fill, 6.5rem);
  row-gap: 20px;
  column-gap: 10px;
  justify-content: center;
  transform: scale(1.1);
`;

export const Container = styled.div`
  width: 8rem;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const ImgLayout = styled.div`
  width: 8rem;
  height: 6rem;
  border-radius: 0.9rem;
  border: 2px solid white;
  overflow: hidden;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
`;

export const VoterLayout = styled.div<{ click?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -10%;
  border-radius: 1.6rem;
  background: ${(props) =>
    props.click ? 'rgba(255, 255, 255, 0.92)' : 'none'};
  backdrop-filter: ${(props) => (props.click ? 'blur(2px)' : 'none')};
`;

export const VoterContainer = styled.div<{ click?: boolean }>`
  display: ${(props) => (props.click ? 'flex' : 'none')};
  width: 5rem;
  height: 100%;
  padding-left: 0.2rem;
  align-items: center;
  color: #1d3a72;
  font-size: 0.7rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VoterBox = styled.img`
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
`;

export const CloseButton = styled(CloseBtnRound)`
  position: absolute;
  right: 0.3rem;
  pointer: cursor;
`;

export const ButtonLayout = styled.button`
  width: 90%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonText = styled.button`
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  position: absolute;
  top: 50%;
  right: 7%;
  transform: translateY(-40%);
`;
