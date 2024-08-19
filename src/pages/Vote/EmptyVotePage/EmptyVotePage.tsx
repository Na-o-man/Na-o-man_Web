import React, { useEffect } from 'react';
import * as S from './Styles';
import EmptyVoteBox from 'components/Vote/EmptyVoteBox/EmptyVoteBox';
import { useRecoilValue } from 'recoil';
import { shareGroupId } from 'recoil/states/share_group';
import { getAgendasByShareGroup } from 'apis/getAgendasByShareGroup';
import { useNavigate } from 'react-router-dom';

const EmptyVotePage = () => {
  const nav = useNavigate();
  const groupId = useRecoilValue(shareGroupId);
  const handlePastAgendaClick = async () => {
    if (isNaN(groupId) || groupId <= 0) {
      console.error('유효하지 않은 공유 그룹 ID입니다.');
      return;
    }
    try {
      const { agendaDetailInfoList } = await getAgendasByShareGroup(groupId);

      if (agendaDetailInfoList && agendaDetailInfoList.length > 0) {
        // 안건 데이터가 있으면 vote/list 경로로 이동
        nav('/vote/list', { state: { agendaDetailInfoList } });
      }
    } catch (error) {
      console.error('지난 안건 조회 중 오류 발생:', error);
      alert('지난 안건 조회 중 오류가 발생했습니다.');
    }
  };
  useEffect(() => {
    handlePastAgendaClick();
  }, [shareGroupId]);
  return (
    <S.Layout>
      <EmptyVoteBox />
    </S.Layout>
  );
};

export default EmptyVotePage;
