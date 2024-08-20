import React from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
import DropDown from 'components/Common/DropDown/DropDown';
import { useRecoilValue } from 'recoil';
import { isAlertPop, isModalOpen } from 'recoil/states/vote';
import AlertComponent from '../../components/Vote/AlertComponent/AlertComponent';
import VotePage from './VotePage/VotePage';
import { useLocation } from 'react-router-dom';
import CreateVotePage from './CreateVotePage/CreateVotePage';
import VoteListPage from './VoteListPage/VoteListPage';
import EmptyVotePage from './EmptyVotePage/EmptyVotePage';
import VoteDetailPage from './VoteDetailPage/VoteDetailPage';
import { shareGroupId } from 'recoil/states/share_group';

const VoteMainPage = () => {
  const { pathname } = useLocation();
  const groupId = useRecoilValue(shareGroupId);
  let component;
  let header = <Header backarrow />;
  switch (pathname) {
    case '/vote/list':
      header = <Header backarrow addbtn backPath={`/group/${groupId}`} />;
      component = <VoteListPage />;
      break;
    case '/vote/create':
      component = <CreateVotePage />;
      break;
    case '/vote/excute':
      component = <VotePage />;
      break;
    case '/vote/detail':
      component = <VoteDetailPage />;
      break;
    default:
      component = <EmptyVotePage />;
  }
  const isOpen = useRecoilValue(isModalOpen);
  const isAlerted = useRecoilValue(isAlertPop);

  return (
    <S.Layout>
      {(isOpen || isAlerted) && <S.BackLayout />}
      {isAlerted && <AlertComponent />}
      {header}
      <S.DropDownBox>
        <DropDown />
      </S.DropDownBox>
      <S.Content>{component}</S.Content>
    </S.Layout>
  );
};

export default VoteMainPage;
