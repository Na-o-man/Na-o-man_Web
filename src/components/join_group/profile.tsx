import styled from 'styled-components';
import { ProfileBar } from 'assets/icon';

const Container = styled.div`
  width: 200px;
  height: 96px;
  background-color: transparent;

  display: flex;
  position: relative;
`;

const ProfilePictureCircle = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background-color: #bbcfe5;
  border-radius: 50%;
  position: relative;
  border: 3px solid #fff;
  z-index: 1;
`;

const ProfileNameBox = styled.div`
  position: absolute;
  top: 10px;
  left: 19px;
  color: #fff;
  width: 225px;
  height: 40px;
  border-radius: 48.5px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background-color: red;
  opacity: 0.8;
  background: linear-gradient(
    84deg,
    rgba(255, 255, 255, 0.3) 44.62%,
    rgba(255, 255, 255, 0.7) 99.93%
  );
  backdrop-filter: blur(12px);
`;

const StyleProfileBar = styled(ProfileBar)`
  position: absolute;
  bottom: 22px;
  left: 19px;

  width: 225px;
  height: 16px;
  border-radius: 48.5px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  justify-content: flex-end;
  opacity: 0.8;
  background: linear-gradient(
    84deg,
    rgba(255, 255, 255, 0.3) 18.56%,
    rgba(255, 255, 255, 0.7) 93.81%
  );
  backdrop-filter: blur(12px);
`;

const Profile = () => {
  return (
    <Container>
      <ProfilePictureCircle />
      <ProfileNameBox />
      <StyleProfileBar />
    </Container>
  );
};

export default Profile;
