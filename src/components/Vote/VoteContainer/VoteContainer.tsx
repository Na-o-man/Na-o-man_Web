import React from 'react';
import * as S from './Styles';
import { agendaPhotosListType } from 'recoil/types/vote';

interface props {
  data: agendaPhotosListType[];
}

const findMaxVoteCount = (data: agendaPhotosListType[]): number | null => {
  if (data.length === 0) return null; // 배열이 비어있으면 null 반환
  return data.reduce((max, photo) => {
    // photo.voteCount가 숫자인지 확인
    if (typeof photo.voteCount !== 'number' || isNaN(photo.voteCount)) {
      return max; // 유효하지 않은 경우 현재 최대값 유지
    }
    return Math.max(max, photo.voteCount);
  }, data[0].voteCount);
};

const VoteContainer = ({ data }: props) => {
  const maxVoteCount = findMaxVoteCount(data);
  console.log(maxVoteCount);
  return (
    <S.Layout>
      {data.map((d) => (
        <S.PictureBox
          key={d.agendaPhotoId}
          src={d.url}
          ismost={d.voteCount === maxVoteCount && !!maxVoteCount}
        />
      ))}
    </S.Layout>
  );
};

export default VoteContainer;
