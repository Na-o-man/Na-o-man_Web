import React from 'react';
import VoteInput from 'components/Vote/VoteInput/VoteInput';
import PhotoContainer from 'components/Vote/PhotoContainer/PhotoContainer';
import * as S from './Styles';

const CreateVotePage = () => {
  return (
    <S.Layout>
      <VoteInput />
      <PhotoContainer />
    </S.Layout>
  );
};

export default CreateVotePage;
