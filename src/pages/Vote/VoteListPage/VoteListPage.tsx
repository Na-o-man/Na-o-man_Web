import VoteList from 'components/Vote/VoteList/VoteList';
import React from 'react';
import * as S from './Styles';

const VoteListPage = () => {
  return (
    <S.Layout>
      <VoteList />
      <VoteList />
    </S.Layout>
  );
};

export default VoteListPage;
