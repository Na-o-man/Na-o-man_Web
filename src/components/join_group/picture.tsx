import React from 'react';
import styled from 'styled-components';
import { Fly } from 'assets/icon';

const Container = styled.div<{ style?: React.CSSProperties }>`
  position: absolute;
  width: 65px;
  height: 75px;
  flex-shrink: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ style }) => style && { ...style }};
`;

const ProfilePictureCircle = styled.div<{ image: string }>`
  width: 65px;
  height: 65px;
  background-color: #bbcfe5;
  border-radius: 50%;
  border: 3px solid #fff;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleName = styled.div`
  color: #4e4e4e;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.25px;
`;

const StyleFly = styled(Fly)`
  width: 16.014px;
  height: 16.014px;
  transform: rotate(-42.503deg);
`;

interface PictureNameProps {
  name: string;
  image: string;
  style?: React.CSSProperties;
}

const Picture: React.FC<PictureNameProps> = ({ name, image, style }) => {
  console.log(image);
  return (
    <Container style={style}>
      {image ? (
        <ProfilePictureCircle image={image} />
      ) : (
        <ProfilePictureCircle image={image}>
          <StyleFly />
        </ProfilePictureCircle>
      )}

      <StyleName>{name}</StyleName>
    </Container>
  );
};

export default Picture;
