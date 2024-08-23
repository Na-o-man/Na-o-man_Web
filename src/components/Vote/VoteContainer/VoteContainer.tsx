import React from 'react';
import * as S from './Styles';
import { agendaPhotosListType } from 'recoil/types/vote';
import { useTheme } from 'styled-components';

interface props {
  data: agendaPhotosListType[];
}

const findPhotoWithMostVotes = (data: agendaPhotosListType[]) => {
  if (data.length === 0) return null;
  return data.reduce(
    (max, photo) => (photo.voteCount > max.voteCount ? photo : max),
    data[0],
  );
};

const VoteContainer = ({ data }: props) => {
  const theme = useTheme();
  const photoWithMostVotes = findPhotoWithMostVotes(data);
  console.log(data);
  return (
    <S.Layout>
      {data.map((d) => (
        <S.PictureBox
          key={d.agendaPhotoId}
          src={d.url}
          style={{
            border:
              d.agendaPhotoId === photoWithMostVotes?.agendaPhotoId
                ? `3px solid ${theme.colors.accent};`
                : 'none',
          }}
        />
      ))}
    </S.Layout>
  );
};

export default VoteContainer;
