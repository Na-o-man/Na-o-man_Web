import React, { useEffect } from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudBtn, ModalBack } from 'assets/icon';
import { useRecoilState } from 'recoil';
import { isModalOpen, selectedAgendaPics } from 'recoil/states/vote';
import VoterBox from 'components/Vote/VoterBox/VoterBox';
import { useLocation, useNavigate } from 'react-router-dom';
import VoteResultModal from 'components/Vote/VoteModal/VoteResultModal';
import { useTheme } from 'styled-components';
import { agendaPhotosListType, agendasListType } from 'recoil/types/vote';
import { fetchNowVote } from 'apis/vote';

const findPhotoWithMostVotes = (data: agendaPhotosListType[]) => {
  if (data.length === 0) return null;
  return data.reduce(
    (max, photo) => (photo.voteCount > max.voteCount ? photo : max),
    data[0],
  );
};

const VoteDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const [agendaVote, setAgendaVote] = useRecoilState(selectedAgendaPics); //투표 결과
  const theme = useTheme();
  const { agendaData } = location.state as { agendaData: agendasListType }; //안건 데이터가져오기

  // 투표 현황 조회
  useEffect(() => {
    const fetchData = async () => {
      if (agendaData?.agendaId) {
        try {
          const voteData = await fetchNowVote(agendaData.agendaId);
          setAgendaVote(voteData);
        } catch (error) {
          console.error('Error fetching vote data:', error);
        }
      }
    };
    fetchData();
  }, [agendaData]);

  const handleClickBtn = () => {
    navigate('/vote/list');
  };

  const handleImgClick = (idx: number) => {
    if (agendaVote && agendaData) {
      const selectedPhoto = agendaVote[idx];
      setAgendaVote([selectedPhoto]);
      setIsOpen(true);
    }
  };
  const photoWithMostVotes = agendaVote
    ? findPhotoWithMostVotes(agendaVote)
    : null;

  return (
    <>
      {isOpen && (
        <>
          <VoteResultModal
            title={agendaData?.title || ''}
            agendaId={agendaData?.agendaId || 0}
          />
          <ModalBack
            style={{
              position: 'absolute',
              top: '-15%',
              width: '90%',
              zIndex: '2',
              backdropFilter: 'blur(10px)',
            }}
          />
        </>
      )}
      {agendaData && (
        <S.Layout key={agendaData.agendaId}>
          <VoteTitle title={agendaData.title} />
          {agendaData.agendaPhotoInfoList.map((photo, i) => (
            <S.ImgLayout key={photo.agendaPhotoId}>
              <S.ImgBox
                src={photo.url}
                onClick={() => handleImgClick(i)}
                style={{
                  border:
                    photo.agendaPhotoId === photoWithMostVotes?.agendaPhotoId
                      ? `3px solid ${theme.colors.accent}`
                      : 'none',
                }}
              />
              <VoterBox
                member={photo.votesList.map((vote) => vote.profileInfo)}
              />
            </S.ImgLayout>
          ))}
        </S.Layout>
      )}

      <S.ButtonLayout onClick={handleClickBtn}>
        <S.ButtonText>투표하기</S.ButtonText>
        <CloudBtn width={'30%'} />
      </S.ButtonLayout>
    </>
  );
};

export default VoteDetailPage;
