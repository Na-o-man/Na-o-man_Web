import * as S from './group2_styles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Joingroup2: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  //경로에서 마지막 부분 추출

  const handleNext = () => {
    navigate(`/shareGroups/join/${id}/profile`);
  };
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <S.Layout>
      <S.Container>
        <S.TextBox>
          <S.StyledFly />
          <S.Textstyeld>이 그룹이 맞으신가요?</S.Textstyeld>
        </S.TextBox>
        <S.FolderBox>
          <S.Stylefolder />
          <S.PictureBox>
            <S.OverlappingPicture name="김갑돌" />
            <S.OverlappingPicture name="황철순" />
            <S.OverlappingPicture name="박을순" />
          </S.PictureBox>
          <S.StyleFilename>{id}</S.StyleFilename>
        </S.FolderBox>
        <S.ButtonBox>
          <S.StyleButton onClick={handleBackClick}>다시 찾기</S.StyleButton>
          <S.StyleButton2 onClick={handleNext}>맞아요!</S.StyleButton2>
        </S.ButtonBox>
      </S.Container>
    </S.Layout>
  );
};

export default Joingroup2;
