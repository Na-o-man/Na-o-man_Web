import * as S from './group2_styles';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Picture from './picture';

const Joingroup2: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  //경로에서 마지막 부분 추출
  const [groupName, setGroupName] = useState('제주도');

  const handleNext = () => {
    navigate(`/shareGroups/join/${id}/profile`);
  };
  const handleBackClick = () => {
    navigate(-1);
  };

  const [peopleCount, setPeopleCount] = useState(0);
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
            <Picture name="김갑돌" style={{ left: '12px' }} />
            <Picture name="황철순" style={{ left: '67px' }} />
            <Picture name="박을순" style={{ left: '124px' }} />
            <S.StyleCloud style={{ left: '162px' }} />
            <S.StyleCount style={{ left: '175px' }}>
              +{peopleCount}
            </S.StyleCount>
          </S.PictureBox>
          <S.StyleFilename>{groupName}</S.StyleFilename>
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
