import styled from 'styled-components';
import cloudRight from 'assets/background/cloudRight.png';
import Header from 'components/Header/Header';
import { Fly, CloudBtn } from 'assets/icon';

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

const Layout = styled.div`
  background-image: url(${cloudRight});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`; //배경
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

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 32px;
`;

const StyledBtn = styled(CloudBtn)`
  width: 78px;
  height: 48px;
`;

const Joingroup3 = () => {
  return (
    <Layout>
      <Header backarrow />
      <Container>
        <TextBox>
          <StyledFly />
          <Textstyeld>당신이 누구인지 알려주세요.</Textstyeld>
        </TextBox>
        <ProfileBox></ProfileBox>
        <ButtonBox>
          <StyledBtn />
        </ButtonBox>
      </Container>
    </Layout>
  );
};

export default Joingroup3;
