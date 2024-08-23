import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudNextBtn } from 'assets/icon';
import VoteModal from 'components/Vote/VoteModal/VoteModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isModalOpen, selectedPic, agendaTitle } from 'recoil/states/vote';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserState } from 'recoil/states/enter';
import { fetchAgendaDetail } from 'apis/getAgendaDetail';
import { AgendaPhotoInfo, registeredPicsType } from 'recoil/types/vote';
import { ParticularAgendaVote } from 'apis/vote';

interface voteDataProps {
  agendaPhotoId: number;
  comment: string;
}

const VotePage = () => {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const { agendaId } = location.state as { agendaId: number };
  const title = useRecoilValue(agendaTitle);
  // 안건 사진 목록
  const [agendaPics, setAgendaPics] = useState<AgendaPhotoInfo[]>();
  // 모달에 띄울 사진
  const [selectedPicture, setSelectedPic] = useRecoilState(selectedPic);
  const profile = useRecoilValue(UserState);
  const [voteData, setVoteData] = useState<voteDataProps[]>([]);
  const [clickStates, setClickStates] = useState<{ [key: number]: boolean }>(
    {},
  );

  useEffect(() => {
    if (selectedPicture) {
      // 기존 항목을 제외한 새로운 배열 생성
      const updatedVoteData = voteData.filter(
        (vote) => vote.agendaPhotoId !== selectedPicture.pictureId,
      );

      // 새로운 항목 추가
      const newVote = {
        comment: selectedPicture.comment ?? ' ',
        agendaPhotoId: selectedPicture.pictureId,
      };
      setVoteData([...updatedVoteData, newVote]);
    }
  }, [selectedPicture]);

  const handleVoterClick = (agendaPhotoId: number) => {
    setClickStates((prev) => ({
      ...prev,
      [agendaPhotoId]: !prev[agendaPhotoId],
    }));
  };

  const handleClickBtn = async () => {
    try {
      await ParticularAgendaVote(agendaId, voteData);
      navigate('/vote/list');
    } catch (error: any) {
      console.error('Error submitting vote:', error.message);
    }
  };

  const handleImgClick = (idx: number) => {
    setIsOpen(true);
    if (agendaPics) {
      const picture: registeredPicsType = {
        pictureId: agendaPics[idx].agendaPhotoId,
        url: agendaPics[idx].url,
      };
      setSelectedPic(picture);
    }
  };

  const handleCloseButtonClick = (agendaPhotoId: number) => {
    setVoteData((prev) =>
      prev.filter((vote) => vote.agendaPhotoId !== agendaPhotoId),
    );
  };

  const getAgendaList = async () => {
    const agendaData = await fetchAgendaDetail(agendaId);
    setAgendaPics(agendaData);
  };
  useEffect(() => {
    getAgendaList();
    setVoteData([]);
  }, [agendaId]);

  return (
    <>
      {isOpen && <VoteModal />}
      <S.Layout>
        <VoteTitle title={title} />
        <S.VoteContainer>
          {agendaPics?.map((pic, idx) => {
            const voteItem = voteData.find(
              (vote) => vote.agendaPhotoId === pic.agendaPhotoId,
            );
            return (
              <S.Container key={pic.agendaPhotoId}>
                <S.ImgLayout>
                  <S.ImgBox src={pic.url} onClick={() => handleImgClick(idx)} />
                </S.ImgLayout>
                {voteItem && (
                  <S.VoterLayout
                    click={clickStates[pic.agendaPhotoId] || false}
                    onClick={() => handleVoterClick(pic.agendaPhotoId)}
                  >
                    <S.VoterBox src={profile?.image} />

                    <S.VoterContainer
                      click={clickStates[pic.agendaPhotoId] || false}
                    >
                      {voteItem.comment || ' '}
                      <S.CloseButton
                        onClick={() =>
                          handleCloseButtonClick(pic.agendaPhotoId)
                        }
                      />
                    </S.VoterContainer>
                  </S.VoterLayout>
                )}
              </S.Container>
            );
          })}
        </S.VoteContainer>
        <S.ButtonLayout onClick={handleClickBtn}>
          <CloudNextBtn width={'30%'} />
        </S.ButtonLayout>
      </S.Layout>
    </>
  );
};

export default VotePage;
