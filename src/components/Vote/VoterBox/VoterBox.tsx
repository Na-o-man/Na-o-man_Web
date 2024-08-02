import React from 'react';
import * as S from './Styles';
import { votersListType } from 'recoil/types/vote';

interface props {
  member: votersListType[];
}

const VoterBox = ({ member }: props) => {
  return (
    <S.Layout>
      {member.map((mem) => (
        <S.VoterContainer key={mem.memberId}>
          <S.VoterBox src={mem.profileImage} />
        </S.VoterContainer>
      ))}
    </S.Layout>
  );
};

export default VoterBox;
