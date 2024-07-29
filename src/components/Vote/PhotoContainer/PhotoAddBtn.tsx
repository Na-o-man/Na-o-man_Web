import React, { useState } from 'react';
import * as S from './Styles';
import { AddVoteBtn } from 'assets/icon';

const PhotoAddBtn = () => {
  const mockMember = ['황지원', '김똘똘', '박을순', 'Others', '전체'];
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.ButtonLayout>
      {isClicked && (
        <S.ListLayout>
          <S.ListContainer>
            {mockMember.map((mem, i) => (
              <S.ItemLayout key={i} onClick={handleClick}>
                {mem}
              </S.ItemLayout>
            ))}
          </S.ListContainer>
        </S.ListLayout>
      )}
      <AddVoteBtn style={{ width: '10%', zIndex: 1 }} onClick={handleClick} />
    </S.ButtonLayout>
  );
};

export default PhotoAddBtn;
