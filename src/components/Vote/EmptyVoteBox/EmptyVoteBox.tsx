import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';

const EmptyVoteBox: React.FC = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate('/vote/create');
  };
  return (
    <S.Layout>
      <S.MiddleRectangle width={'90%'} />
      <S.MiddleContainer>
        <S.Text>아직 안건이 없어요.</S.Text>
        <S.Text>새로운 안건을 추가해주세요.</S.Text>
        <S.AddGroupBtnContainer>
          <S.AddGroupBtn width={'150'} />
          <S.AddGroupBtnText onClick={handleClickBtn}>
            안건 추가하기
          </S.AddGroupBtnText>
        </S.AddGroupBtnContainer>
      </S.MiddleContainer>
    </S.Layout>
  );
};

export default EmptyVoteBox;
