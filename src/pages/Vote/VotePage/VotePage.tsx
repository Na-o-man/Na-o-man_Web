import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudNextBtn } from 'assets/icon';
import VoteModal from 'components/Vote/VoteModal/VoteModal';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  isModalOpen,
  selectedPic,
  registeredPics,
  agendaTitle,
} from 'recoil/states/vote';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserState } from 'recoil/states/enter';
import { ParticularAgendaVote } from 'apis/vote';
import { fetchAgendaDetail } from 'apis/getAgendaDetail';
import { AgendaPhotoInfo, registeredPicsType } from 'recoil/types/vote';

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
  const resetSelect = useResetRecoilState(selectedPic);
  const profile = useRecoilValue(UserState);
  const [click, setClick] = useState(false);

  const handleClickBtn = async () => {
    try {
      const voteData = [
        {
          comment: selectedPicture.comment ?? '',
          agendaPhotoId: selectedPicture.pictureId,
        },
      ];
      await ParticularAgendaVote(agendaId, voteData);
      navigate('/vote/list');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error submitting vote:', error.message);
        alert('투표 제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
      } else {
        console.error('Unknown error occurred:', error);
        alert('알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.');
      }
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
  const handleDeleteVote = () => {
    resetSelect(); // 선택된 사진 초기화
  };

  const getAgendaList = async () => {
    const agendaData = await fetchAgendaDetail(agendaId);
    setAgendaPics(agendaData);
  };
  useEffect(() => {
    getAgendaList();
  }, [agendaId]);
  return (
    <>
      {isOpen && <VoteModal />}
      <S.Layout>
        <VoteTitle title={title} />
        {agendaPics?.map((pic, idx) => (
          <S.Container key={pic.agendaPhotoId}>
            <S.ImgLayout>
              <S.ImgBox src={pic.url} onClick={() => handleImgClick(idx)} />
            </S.ImgLayout>
            {selectedPicture.comment &&
              selectedPicture.pictureId === pic.agendaPhotoId && (
                <S.VoterLayout click={click}>
                  <S.VoterBox
                    src={profile.image}
                    onClick={() => setClick(!click)}
                  />
                  <S.VoterContainer click={click}>
                    {selectedPicture.comment}
                    <S.CloseButton onClick={handleDeleteVote} />
                  </S.VoterContainer>
                </S.VoterLayout>
              )}
          </S.Container>
        ))}
        <S.ButtonLayout onClick={handleClickBtn}>
          <CloudNextBtn width={'30%'} />
        </S.ButtonLayout>
      </S.Layout>
    </>
  );
};

export default VotePage;
