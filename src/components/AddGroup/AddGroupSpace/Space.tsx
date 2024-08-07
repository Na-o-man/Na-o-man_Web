import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { namesState, newtypeState, placeState, typeState } from '../state';

const Space = () => {
  const navigate = useNavigate();
  const names = useRecoilValue(namesState);
  const selectedTypes = useRecoilValue(typeState);
  const newType = useRecoilValue(newtypeState);
  const [place, setPlace] = useRecoilState(placeState);

  const handleNextClick = () => {
    // 입력값이 있는 경우 콘솔에 출력
    if (place.trim() !== '') {
      console.log(
        `이름: ${names.join(', ')}
성격: ${selectedTypes.join(', ')}, ${newType}
장소: ${place}`,
      );
      navigate('/group/add/loading');
    } else {
      alert('장소를 입력해주세요');
    }
  };

  return (
    <S.Layout>
      <S.Fly />
      <S.Text>어디에서 찍은 사진인가요?</S.Text>
      <S.InputCountContainer>
        <S.Input />
        <S.InputCounterText
          type="text"
          placeholder="공간을 입력해 주세요."
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </S.InputCountContainer>
      <S.NextArrow onClick={handleNextClick} />
    </S.Layout>
  );
};

export default Space;
