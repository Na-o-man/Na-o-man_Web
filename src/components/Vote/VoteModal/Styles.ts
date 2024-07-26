import styled from 'styled-components';

export const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 2;
`;

export const ImgLayout = styled.div`
  width: 100%;
  height: 16rem;
  position: relative;
  overflow: hidden;
  border: 2px solid #fff;
  border-radius: 1.125rem;
  box-shadow: 0px 3px 6px 0px rgba(78, 78, 78, 0.25);
`;

export const CommentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ImgContainer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-5%, -5%);
  width: 20rem;
  height: 20rem;
`;

export const IconLayout = styled.button`
  position: absolute;
  top: 2%;
  right: 1%;
  z-index: 1;
`;

export const InputLayout = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 0.8rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
`;

export const InputContainer = styled.input`
  height: 100%;
  width: 60%;
  color: #1d3a72;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  &::placeholder {
    color: #969393;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const VoteBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0 0.5rem;
  height: 1.7rem;
  border-radius: 0.4rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  color: #515151;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;
