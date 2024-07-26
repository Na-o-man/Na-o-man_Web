import styled from 'styled-components';

const Containter = styled.div`
  width: 65px;
  height: 65px;
  flex-shrink: 0;
  background-color: transparent;
`;

const ProfilePictureCircle = styled.img`
  width: 65px;
  height: 65px;
  background-color: #bbcfe5;
  border-radius: 50%;
  position: absolute;
  border: 3px solid #fff;
  z-index: 0;
  fill: url(<path-to-image>) lightgray -23.4px -24.507px / 172% 203.414%
    no-repeat;
`;

const Picture = () => {
  return (
    <Containter>
      <ProfilePictureCircle></ProfilePictureCircle>
    </Containter>
  );
};

export default Picture;
