import React from 'react';
import * as S from './Styles';
import Header from 'components/Header/Header';
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
import DropDown from 'components/Common/DropDown/DropDown';

const VoteMainPage = () => {
  const { pathname } = useLocation();
  const groupId = useRecoilValue(shareGroupId);
  let component;
  let header = <Header backarrow />;
  let dropdown = <DropDown />;
  switch (pathname) {
    case '/vote/list':
      header = <Header backarrow addbtn backPath={`/group/${groupId}`} />;
      component = <VoteListPage />;
      break;
    case '/vote/create':
      header = <Header backarrow backPath={'/vote'} />;
      component = <CreateVotePage />;
      break;
    case '/vote/excute':
      header = <Header backarrow backPath="/vote/list" />;
      component = <VotePage />;
      dropdown = <DropDown disable />;
      break;
    case '/vote/detail':
      component = <VoteDetailPage />;
      dropdown = <DropDown disable />;
      break;
    default:
      header = <Header backarrow addbtn backPath={`/group/${groupId}`} />;
      component = <EmptyVotePage />;
  }
  const isOpen = useRecoilValue(isModalOpen);
  const isAlerted = useRecoilValue(isAlertPop);

  return (
    <S.Layout>
      {(isOpen || isAlerted) && <S.BackLayout />}
      {isAlerted && <AlertComponent />}
      {header}
      <S.DropDownBox>{dropdown}</S.DropDownBox>
      <S.Content>{component}</S.Content>
    </S.Layout>
  );
};

export default VoteMainPage;
