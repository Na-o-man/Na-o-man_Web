import React from 'react';
import * as S from './Styles';
import { agendaPhotosListType } from 'recoil/types/vote';

interface props {
  data: agendaPhotosListType[];
}

const VoteContainer = ({ data }: props) => {
  return (
    <S.Layout>
      {data.map((d) => (
        <S.Container key={d.agendaPhotoId}>
          <S.PictureBox src={d.url} />
          <S.VoterLayout>
            {d.votesList.map((v) => (
              <S.VoterContainer key={v.memberId}>
                <S.VoterBox src={v.profileImage} />
              </S.VoterContainer>
            ))}
          </S.VoterLayout>
        </S.Container>
      ))}
    </S.Layout>
  );
};

export default VoteContainer;
