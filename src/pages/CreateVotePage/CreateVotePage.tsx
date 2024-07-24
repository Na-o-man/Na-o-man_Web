import React from 'react';
import * as S from './Styles';
import DropDown from 'components/Common/DropDown/DropDown';
import Header from 'components/Header/Header';
import VoteInput from 'components/Vote/VoteInput/VoteInput';
import PhotoContainer from 'components/Vote/PhotoContainer/PhotoContainer';
import VoteAddBtn from 'components/Vote/VoteAddBtn/VoteAddBtn';
import styled from 'styled-components';
import { Fly } from 'assets/icon';

const VotePage = () => {
  return (
    <S.Layout>
      <Header />
      <DropDown />
      <S.Content>
        <VoteInput />
        <TextLayout>
          <Fly style={{ width: '6%' }} />
          <TextContainer>+를 눌러 사진을 추가해주세요.</TextContainer>
        </TextLayout>
        <PhotoContainer />
        <VoteAddBtn />
      </S.Content>
    </S.Layout>
  );
};

export default VotePage;

const TextLayout = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
`;

const TextContainer = styled.div`
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
`;
