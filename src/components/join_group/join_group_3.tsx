import React, { useState } from 'react';
import Header from 'components/Header/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './group3_styles';
import Profile from './profile';
import { useSwipeable } from 'react-swipeable';

interface Member {
  name: string;
  image: string;
}

const Joingroup3: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { members } = location.state || { members: [] };

  const handleBackClick = () => {
    navigate(-1);
  }; //뒤로가기버튼 클릭

  const [currentPage, setCurrentPage] = useState(0); //현재 보고 있는 page
  const membersPerPage = 3; //한 페이지에 표시할 프로필 수
  const pageCount = Math.ceil(members.length / membersPerPage); //전체 페이지 수 계산

  const handleSwipedLeft = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSwipedRight = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,

    trackMouse: true,
  });

  const displayMembers = members.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage,
  );

  return (
    <S.Layout>
      <Header backarrow />
      <S.BackButton onClick={handleBackClick} />
      <S.Container {...swipeHandlers}>
        <S.TextBox>
          <S.StyledFly />
          <S.Textstyeld>당신이 누구인지 알려주세요.</S.Textstyeld>
        </S.TextBox>
        <S.ProfileBox>
          {displayMembers.map((member: Member, index: number) => (
            <Profile key={index} name={member.name} image={member.image} />
          ))}
        </S.ProfileBox>
        <S.Pagination>
          {Array.from({ length: pageCount }).map((_, index) => (
            <S.PageDot key={index} active={index === currentPage} />
          ))}
        </S.Pagination>
        <S.ButtonBox>
          <S.StyledBtn />
          <S.NextButton>→</S.NextButton>
        </S.ButtonBox>
      </S.Container>
    </S.Layout>
  );
};

export default Joingroup3;
