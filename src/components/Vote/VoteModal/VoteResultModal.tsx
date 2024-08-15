import React, { useEffect } from 'react';
import * as S from './Styles';
import { CloseModalGrey } from 'assets/icon';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import CommentBox from '../CommentBox/CommentBox';
import VoteTitle from '../VoteTitle/VoteTitle';
import { selectedAgendaPics, isModalOpen } from 'recoil/states/vote';
import { fetchNowVote } from 'apis/vote';

interface VoteResultModalProps {
  title: string;
  agendaId: number;
}

const VoteResultModal = ({ title, agendaId }: VoteResultModalProps) => {
  const setIsOpen = useSetRecoilState(isModalOpen);
  const data = useRecoilValue(selectedAgendaPics);
  const handleIconClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetchNowVote(agendaId);
  }, [agendaId]);

  if (!data) {
    return null; // 데이터가 없는 경우 컴포넌트를 렌더링하지 않음
  }

  const selectedPhoto = data[0];
  return (
    <S.ModalLayout>
      <VoteTitle clicked title={title} />
      <S.ImgLayout>
        <S.IconLayout onClick={handleIconClick}>
          <CloseModalGrey width={'70%'} />
        </S.IconLayout>
        <S.ImgContainer src={selectedPhoto.url} />
      </S.ImgLayout>
      <S.VoterLayout>
        {selectedPhoto.votesList.map((vote) => (
          <S.VoterContainer key={vote.voteId}>
            <S.VoterBox src={vote.profileInfo.profileImage} />
          </S.VoterContainer>
        ))}
      </S.VoterLayout>
      <S.CommentLayout>
        {selectedPhoto.votesList.map((vote) => (
          <CommentBox
            key={vote.voteId}
            comment={vote.comment}
            name={vote.profileInfo.name}
            profileImage={vote.profileInfo.profileImage}
          />
        ))}
      </S.CommentLayout>
    </S.ModalLayout>
  );
};

export default VoteResultModal;
