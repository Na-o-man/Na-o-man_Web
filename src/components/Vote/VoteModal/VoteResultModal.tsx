import React from 'react';
import * as S from './Styles';
import { CloseModalGrey, ModalBack } from 'assets/icon';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import CommentBox from '../CommentBox/CommentBox';
import VoteTitle from '../VoteTitle/VoteTitle';
import { selectedPhoto } from 'recoil/states/vote';
import { isModalOpen } from 'recoil/states/vote';

interface props {
  title: string;
}

const VoteResultModal = ({ title }: props) => {
  const setIsOpen = useSetRecoilState(isModalOpen);
  const data = useRecoilValue(selectedPhoto);
  const handleIconClick = () => {
    setIsOpen(false);
  };

  return (
    <S.ModalLayout>
      <VoteTitle clicked title={title} />
      <S.ImgLayout>
        <S.IconLayout onClick={handleIconClick}>
          <CloseModalGrey width={'70%'} />
        </S.IconLayout>
        <S.ImgContainer src={data.url} />
      </S.ImgLayout>
      <S.VoterLayout>
        {data.votesList.map((vote) => (
          <S.VoterContainer key={vote.memberId}>
            <S.VoterBox src={vote.profileImage} />
          </S.VoterContainer>
        ))}
      </S.VoterLayout>
      <S.CommentLayout>
        {data.votesList.map((vote) => (
          <CommentBox key={vote.memberId} image={vote.profileImage} />
        ))}
      </S.CommentLayout>
    </S.ModalLayout>
  );
};

export default VoteResultModal;
