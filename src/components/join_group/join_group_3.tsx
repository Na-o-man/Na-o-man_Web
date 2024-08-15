import React, { useState } from 'react';
import Header from 'components/Header/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './group3_styles';
import Profile from './profile';
import { useSwipeable } from 'react-swipeable';
import axios from 'axios';

interface Member {
  profileId: number;
  name: string;
  image: string;
}

const Joingroup3: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { members, shareGroupId } = location.state || {
    members: [],
    shareGroupId: null,
  };

  const handleBackClick = () => {
    navigate(-1);
  }; //뒤로가기버튼 클릭

  const [currentPage, setCurrentPage] = useState(0); //현재 보고 있는 page
  const membersPerPage = 3; //한 페이지에 표시할 프로필 수
  const pageCount = Math.ceil(members.length / membersPerPage); //전체 페이지 수 계산

  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
    null,
  );

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

  const handleProfileClick = (profileId: number) => {
    setSelectedProfileId(profileId);
    console.log(profileId);
  };
  const token = process.env.REACT_APP_REFRESH_TOKEN;

  const handleClick = async () => {
    if (selectedProfileId === null) {
      alert('프로필을 선택해주세요.');
      return;
    }
    try {
      const response = await axios.post(
        'https://naoman.site/shareGroups/join',
        {
          shareGroupId,
          profileId: selectedProfileId, // 수정된 필드 이름
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // 인증 토큰 추가
          },
        },
      );

      if (response.status === 200) {
        console.log('그룹에 참여 성공하였습니다.', response.data);

        navigate('/group', {
          state: { shareGroupId },
        });
      } else {
        alert('그룹 참여에 실패했습니다.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          const errorMessage = error.response.data.message;
          if (errorMessage === '이미 해당 공유 그룹에 참여하였습니다.') {
            alert('이미 해당 그룹에 참여하셨습니다.');
          } else {
            alert('그룹 참여에 실패했습니다. 다시 시도해 주세요.');
          }
        } else {
          alert('서버와의 연결에 문제가 발생했습니다.');
        }
      } else {
        alert('예기치 않은 오류가 발생했습니다.');
      }
      console.error('그룹 참여 중 오류 발생:', error);
    }
  };

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
          {displayMembers.map((member: Member) => (
            <Profile
              key={member.profileId}
              name={member.name}
              image={member.image}
              onClick={() => handleProfileClick(member.profileId)}
            />
          ))}
        </S.ProfileBox>
        <S.Pagination>
          {Array.from({ length: pageCount }).map((_, index) => (
            <S.PageDot key={index} active={index === currentPage} />
          ))}
        </S.Pagination>
        <S.ButtonBox>
          <S.StyledBtn />
          <S.NextButton onClick={handleClick}>→</S.NextButton>
        </S.ButtonBox>
      </S.Container>
    </S.Layout>
  );
};

export default Joingroup3;
