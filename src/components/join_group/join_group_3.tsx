import styled from 'styled-components';
import cloudRight from 'assets/background/cloudRight.png';
import Header from 'components/Header/Header';
import { Fly, CloudBtn } from 'assets/icon';
import Profile from './profile';
import { BackButton } from './group1_styles';
import * as S from './group3_styles';
import { useNavigate } from 'react-router-dom';

const Joingroup3: React.FC = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.Layout>
      <Header backarrow />
      <S.BackButton onClick={handleBackClick} />
      <S.Container>
        <S.TextBox>
          <S.StyledFly />
          <S.Textstyeld>당신이 누구인지 알려주세요.</S.Textstyeld>
        </S.TextBox>
        <S.ProfileBox>
          <Profile name="홍길동" />
          <Profile name="황지원" />
          <Profile name="황지투" />
        </S.ProfileBox>
        <S.ButtonBox>
          <S.StyledBtn />
          <S.NextButton>→</S.NextButton>
        </S.ButtonBox>
      </S.Container>
    </S.Layout>
  );
};

export default Joingroup3;
