import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  namesState,
  newtypeState,
  placeState,
  typeState,
} from '../../../recoil/states/addgroupState';

const Space = () => {
  const navigate = useNavigate();
  const names = useRecoilValue(namesState);
  const selectedTypes = useRecoilValue(typeState);
  const newType = useRecoilValue(newtypeState);
  const [place, setPlace] = useRecoilState(placeState);

  const handleNextClick = () => {
    if (place.trim() !== '') {
      navigate('/group/add/loading'); // 로딩 페이지로 이동
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
