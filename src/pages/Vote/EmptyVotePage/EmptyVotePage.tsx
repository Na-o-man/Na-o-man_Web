import React from 'react';
import * as S from './Styles';
import EmptyVoteBox from 'components/Vote/EmptyVoteBox/EmptyVoteBox';

const EmptyVotePage = () => {
  return (
    <S.Layout>
      <EmptyVoteBox />
    </S.Layout>
  );
};

export default EmptyVotePage;
