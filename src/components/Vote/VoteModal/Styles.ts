import styled from 'styled-components';

export const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  position: absolute;
  width: 85%;
  height: 100%;
  z-index: 3;
`;

export const ImgLayout = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  position: relative;
  overflow: hidden;
  border: 2px solid #fff;
  border-radius: 1rem;
  box-shadow: 0px 3px 6px 0px rgba(78, 78, 78, 0.25);
`;

export const ImgContainer = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CommentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

export const IconLayout = styled.button`
  position: absolute;
  top: 1%;
  right: 0;
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

export const VoterLayout = styled.div`
  width: 100%;
  display: flex;
`;

export const VoterContainer = styled.div`
  width: 1.3rem;
`;

export const VoterBox = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;
