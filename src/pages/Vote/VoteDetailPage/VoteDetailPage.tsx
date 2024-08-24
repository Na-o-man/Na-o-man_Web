import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudBtn, ModalBack } from 'assets/icon';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  agendaTitle,
  isModalOpen,
  selectedAgendaPics,
} from 'recoil/states/vote';
import VoterBox from 'components/Vote/VoterBox/VoterBox';
import { useLocation, useNavigate } from 'react-router-dom';
import VoteResultModal from 'components/Vote/VoteModal/VoteResultModal';
import {
  AgendaPhotoInfo,
  agendaPhotosListType,
  agendasListType,
} from 'recoil/types/vote';
import { fetchNowVote } from 'apis/vote';

const findMaxVoteCount = (data: agendaPhotosListType[]): number | null => {
  if (data.length === 0) return null;
  return data.reduce((max, photo) => {
    // photo.voteCount가 숫자인지 확인
    if (typeof photo.voteCount !== 'number' || isNaN(photo.voteCount)) {
      return max; // 유효하지 않은 경우 현재 최대값 유지
    }
    return Math.max(max, photo.voteCount);
  }, data[0].voteCount);
};

const VoteDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const [agendaVote, setAgendaVote] = useRecoilState(selectedAgendaPics); //투표 결과
  const [vote, setVote] = useState<agendaPhotosListType>();
  const { agendaData } = location.state as { agendaData: agendasListType }; //안건 데이터가져오기
  const setTitle = useSetRecoilState(agendaTitle);
  const [photos, setPhotos] = useState<AgendaPhotoInfo[]>([]);
  const [selecedPhoto, setSelectedPhoto] = useState<AgendaPhotoInfo>();

  // 투표 현황 조회
  useEffect(() => {
    const fetchData = async () => {
      if (agendaData?.agendaId) {
        try {
          const voteData = await fetchNowVote(agendaData.agendaId);
          setAgendaVote(voteData);
          console.log(voteData);
        } catch (error) {
          console.error('Error fetching vote data:', error);
        }
      }
    };
    fetchData();
    setPhotos(agendaData.agendaPhotoInfoList);
  }, [agendaData]);

  const handleClickBtn = () => {
    setTitle(agendaData.title);
    navigate('/vote/excute', { state: { agendaId: agendaData.agendaId } });
  };

  const handleImgClick = (idx: number) => {
    if (agendaVote && agendaData) {
      const selectedPhoto = agendaVote[idx];
      setVote(selectedPhoto);
      setSelectedPhoto(photos[idx]);
      setIsOpen(true);
    }
  };
  const isMostVotes = agendaVote ? findMaxVoteCount(agendaVote) : null;
  console.log(`vote:${isMostVotes}`);

  return (
    <>
      {isOpen && vote && (
        <>
          <VoteResultModal
            title={agendaData?.title || ''}
            data={vote}
            url={selecedPhoto?.url}
          />
          <ModalBack
            style={{
              position: 'absolute',
              top: '-13%',
              width: '90%',
              zIndex: '2',
              backdropFilter: 'blur(15px)',
            }}
          />
        </>
      )}
      {agendaData && (
        <S.Layout key={agendaData.agendaId}>
          <VoteTitle title={agendaData.title} />
          <S.VoteContainer>
            {agendaData &&
              agendaVote &&
              agendaData.agendaPhotoInfoList.map((photo, i) => (
                <S.ImgLayout key={photo.agendaPhotoId}>
                  <S.ImgBox
                    key={photo.agendaPhotoId}
                    src={photo.url}
                    onClick={() => handleImgClick(i)}
                    ismost={
                      agendaVote[i]?.voteCount === isMostVotes && !!isMostVotes
                    }
                  />
                  {agendaVote[i]?.votesList.length > 0 && (
                    <VoterBox
                      member={agendaVote[i]?.votesList.map(
                        (vote) => vote.profileInfo,
                      )}
                    />
                  )}
                </S.ImgLayout>
              ))}
          </S.VoteContainer>
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
