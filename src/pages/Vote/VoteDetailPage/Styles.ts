import styled from 'styled-components';

export const Layout = styled.div`
  width: 85%;
  margin: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem 0.5rem;
`;
export const PhotoContainer = styled.div`
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

export const ImgLayout = styled.div`
  position: relative;
  border-radius: 0.5rem;
  width: 8.5rem;
  height: 6.5rem;
`;

export const ImgBox = styled.img`
  cursor: pointer;
  width: 8.5rem;
  height: 6.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
