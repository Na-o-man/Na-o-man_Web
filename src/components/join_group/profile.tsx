import styled from 'styled-components';
import { ProfileBar } from 'assets/icon';
import { Fly } from 'assets/icon';
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: linear-gradient(
    84deg,
    rgba(255, 255, 255, 0.3) 44.62%,
    rgba(255, 255, 255, 0.7) 99.93%
  );
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  padding-left: 70px; /*글자를 오른쪽으로 밀음 */
  box-sizing: border-box;
  font-size: 13px;
  line-height: normal;
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

const ProfilePicture = styled.img`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
`;
const StyleFly = styled(Fly)`
  width: 20.882px;
  height: 20.882px;

  transform: rotate(-40.503deg);
`;

interface ProfileProps {
  name: string;
}
const Profile: React.FC<ProfileProps> = ({ name }) => {
  return (
    <Container>
      <ProfilePictureCircle>
        <StyleFly />
      </ProfilePictureCircle>
      <ProfileNameBox>{name}</ProfileNameBox>
      <StyleProfileBar />
    </Container>
  );
};

export default Profile;
