import styled from 'styled-components';

const Containter = styled.div`
  width: 65px;
  height: 65px;
  flex-shrink: 0;
  background-color: transparent;
  position: relative; /* relative로 설정하여 자식 요소의 absolute 위치 설정 가능 */
`;

const ProfilePictureCircle = styled.img`
  width: 65px;
  height: 65px;
  background-color: #bbcfe5;
  border-radius: 50%;
  position: absolute;
  border: 3px solid #fff;
  z-index: 0;
`;

const NameLabel = styled.div`
  position: absolute;
  bottom: -20px; /* 이름이 원형 프로필 아래에 위치하도록 */
  left: 50%;
  transform: translateX(-50%);
  color: #134b80;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
`;

interface PictureProps {
  name: string; // name prop을 추가합니다.
}

const Picture: React.FC<PictureProps> = ({ name }) => {
  return (
    <Containter>
      <ProfilePictureCircle src="<path-to-image>" alt={name} />
      <NameLabel>{name}</NameLabel> {/* 이름을 표시합니다. */}
    </Containter>
  );
};

export default Picture;
