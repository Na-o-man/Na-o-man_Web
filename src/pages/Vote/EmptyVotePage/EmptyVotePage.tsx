import React from 'react';
import * as S from './Styles';
import VoteAddButton from 'components/Vote/\bVoteAddButton/VoteAddButton';

const EmptyVotePage = () => {
  return (
    <S.Layout>
      <VoteAddButton />
    </S.Layout>
  );
};

export default EmptyVotePage;
