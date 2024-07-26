import React from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from 'components/Common/DropDown/DropDown';
import { useRecoilValue } from 'recoil';
import { isAlertPop, isModalOpen } from 'recoil/states/vote';
import AlertComponent from '../../components/Vote/AlertComponent/AlertComponent';
import VotePage from './VotePage/VotePage';

const VoteMainPage = () => {
  const isOpen = useRecoilValue(isModalOpen);
  const isAlerted = useRecoilValue(isAlertPop);
  return (
    <S.Layout>
      {(isOpen || isAlerted) && <S.BackLayout />}
      {isAlerted && <AlertComponent />}
      <Header />
      <DropDown />
      <S.Content>
        <VotePage />
      </S.Content>
    </S.Layout>
  );
};

export default VoteMainPage;
