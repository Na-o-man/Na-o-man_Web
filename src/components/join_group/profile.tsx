import React from 'react';
import styled from 'styled-components';
import { Fly } from 'assets/icon';

const Container = styled.div`
  width: 200px;
  height: 96px;
  display: flex;
  position: relative;
`;

const ProfilePictureCircle = styled.div<{ image: string }>`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background-color: #bbcfe5;
  border-radius: 50%;
  position: relative;
  border: 3px solid #fff;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const ProfileNameBox = styled.div`
  position: absolute;
  top: 10px;
  left: 19px;
  color: #fff;
  width: 225px;
  height: 40px;
  border-radius: 48.5px;
  border: 2px solid transparent;
  background: linear-gradient(
      84deg,
      rgba(255, 255, 255, 0.3) 44.62%,
      rgba(255, 255, 255, 0.7) 99.93%
    ),
    border-box;
  background-clip: padding-box, border-box;
  display: flex;
  align-items: center;
  padding-left: 70px;
  box-sizing: border-box;
  font-size: 13px;
  line-height: normal;
  border-top: 2px solid rgba(255, 255, 255, 0.7);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
`;

const StyleProfileBar = styled.div`
  position: absolute;
  bottom: 22px;
  left: 19px;
  width: 225px;
  height: 16px;
  border-radius: 48.5px;
  border-top: 2px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  justify-content: flex-end;
  opacity: 0.8;
  background: linear-gradient(
    84deg,
    rgba(255, 255, 255, 0.3) 18.56%,
    rgba(255, 255, 255, 0.7) 93.81%
  );
  backdrop-filter: blur(12px);
`;

const StyleFly = styled(Fly)`
  width: 20.882px;
  height: 20.882px;
  transform: rotate(-40.503deg);
`;

interface ProfileProps {
  name: string;
  image: string;
}

const Profile: React.FC<ProfileProps> = ({ name, image }) => {
  return (
    <Container>
      <ProfilePictureCircle image={image}>
        <StyleFly />
      </ProfilePictureCircle>
      <ProfileNameBox>{name}</ProfileNameBox>
      <StyleProfileBar />
    </Container>
  );
};

export default Profile;
