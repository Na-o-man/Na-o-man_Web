import React from 'react';
import * as S from './Styles';
import { CloseModalGrey } from 'assets/icon';
import { useSetRecoilState } from 'recoil';
import CommentBox from '../CommentBox/CommentBox';
import VoteTitle from '../VoteTitle/VoteTitle';
import { isModalOpen } from 'recoil/states/vote';
import { agendaPhotosListType } from 'recoil/types/vote';

interface VoteResultModalProps {
  title: string;
  data: agendaPhotosListType;
  url?: string;
}

const VoteResultModal = ({ title, data, url }: VoteResultModalProps) => {
  const setIsOpen = useSetRecoilState(isModalOpen);

  const handleIconClick = () => {
    setIsOpen(false);
  };

  if (!data) {
    return null; // 데이터가 없는 경우 컴포넌트를 렌더링하지 않음
  }

  return (
    <S.ModalLayout>
      <VoteTitle clicked title={title} />
      <S.ImgLayout>
        <S.IconLayout onClick={handleIconClick}>
          <CloseModalGrey width={'70%'} />
        </S.IconLayout>
        <S.ImgContainer src={url} />
      </S.ImgLayout>
      <S.VoterLayout>
        {data.votesList.map((vote) => (
          <S.VoterContainer key={vote.voteId}>
            <S.VoterBox src={vote.profileInfo.profileImage} />
          </S.VoterContainer>
        ))}
      </S.VoterLayout>
      <S.CommentLayout>
        {data.voteCount > 0 ? (
          data.votesList.map((vote) => (
            <CommentBox
              key={vote.voteId}
              comment={vote.comment}
              name={vote.profileInfo.name}
              profileImage={vote.profileInfo.profileImage}
            />
          ))
        ) : (
          <CommentBox />
        )}
      </S.CommentLayout>
    </S.ModalLayout>
  );
};

export default VoteResultModal;
