import styled from 'styled-components';

const Container = styled.div`
  width: 65px;
  height: 75px;
  flex-shrink: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfilePictureCircle = styled.div`
  width: 65px;
  height: 65px;
  background-color: #bbcfe5;
  border-radius: 50%;
  border: 3px solid #fff;
  background-image: url('<path-to-image>');
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

interface PictureNameProps {
  name: string;
}

const StyleName = styled.div`
  color: #4e4e4e;
  font-size: 10px;
`;

const Picture: React.FC<PictureNameProps> = ({ name }) => {
  return (
    <Container>
      <ProfilePictureCircle />
      <StyleName>{name}</StyleName>
    </Container>
  );
};

export default Picture;
