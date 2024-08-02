import React from 'react';
import VoteInput from 'components/Vote/VoteInput/VoteInput';
import PhotoContainer from 'components/Vote/PhotoContainer/PhotoContainer';
import styled from 'styled-components';
import { Fly } from 'assets/icon';
import * as S from './Styles';

const CreateVotePage = () => {
  return (
    <S.Layout>
      <VoteInput />
      <TextLayout>
        <Fly style={{ width: '6%' }} />
        <TextContainer>+를 눌러 사진을 추가해주세요.</TextContainer>
      </TextLayout>
      <PhotoContainer />
    </S.Layout>
  );
};

export default CreateVotePage;

const TextLayout = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const TextContainer = styled.div`
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
`;
