import styled from 'styled-components';
import cloudRight from 'assets/background/cloudRight.png';
import { Folder2, Fly, FileNameBox } from 'assets/icon';
import Picture from './picture';
const Container = styled.div`
  aspect-ratio: 430 / 932;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledFly = styled(Fly)`
  margin-right: 9px;
  width: 15.255px;
  height: 18.686px;
`;
const Textstyeld = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
`;

const Layout = styled.div`
  background-image: url(${cloudRight});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`; //배경

const Stylefolder = styled(Folder2)`
  width: 288.959px;
  height: 282px;
  position: absolute;
  z-index: 2;
`;

const StyleButton = styled.button`
  width: 83px;
  height: 39px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  color: #fff; /* 텍스트 색상 설정 */
  font-size: 14px; /* 텍스트 크기 설정 */
  border-radius: 20px;
  border: 2px solid #fff;
  font-weight: 600;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(2px);
`;

const StyleButton2 = styled.button`
  width: 83px;
  height: 39px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  color: #457aae;
  font-size: 14px;

  border: 2px solid #fff;
  font-weight: 600;

  background: linear-gradient(
      246deg,
      rgba(255, 255, 255, 0.5) 17.43%,
      rgba(255, 255, 255, 0.1) 82.57%
    ),
    rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(2px);
`;

const ButtonBox = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  padding: 0 82px;
`;

const PictureBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const FolderBox = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;
  height: 260px;
  margin-bottom: 35px;
  z-index: 1;
`;

const StyleFilename = styled(FileNameBox)`
  width: 233px;
  height: 45.07px;
  flex-shrink: 0;
  position: absolute;
  bottom: 270px;

  z-index: 2;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
`;

const OverlappingPicture = styled(Picture)`
  &:nth-child(2) {
    margin-left: -15px; /* 두 번째 사진이 첫 번째 사진과 겹치도록 */
  }
  &:nth-child(3) {
    margin-left: -15px; /* 세 번째 사진이 두 번째 사진과 겹치도록 */
  }
`;

const Joingroup2 = () => {
  return (
    <Layout>
      <Container>
        <TextBox>
          <StyledFly />
          <Textstyeld>이 그룹이 맞으신가요?</Textstyeld>
        </TextBox>
        <FolderBox>
          <Stylefolder />
          <OverlappingPicture />
          <OverlappingPicture />
          <OverlappingPicture />

          <StyleFilename />
        </FolderBox>

        <ButtonBox>
          <StyleButton>다시 찾기</StyleButton>
          <StyleButton2>맞아요!</StyleButton2>
        </ButtonBox>
      </Container>
    </Layout>
  );
};

export default Joingroup2;
