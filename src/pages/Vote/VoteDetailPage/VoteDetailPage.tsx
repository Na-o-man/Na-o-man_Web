import React from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudBtn, ModalBack } from 'assets/icon';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isModalOpen, selectedAgendaPics } from 'recoil/states/vote';
import VoterBox from 'components/Vote/VoterBox/VoterBox';
import { useNavigate } from 'react-router-dom';
import VoteResultModal from 'components/Vote/VoteModal/VoteResultModal';
import { selectedAgenda } from 'recoil/selectors/vote';
import { useTheme } from 'styled-components';
import { agendaPhotosListType } from 'recoil/types/vote';

const findPhotoWithMostVotes = (data: agendaPhotosListType[]) => {
  if (data.length === 0) return null;
  return data.reduce(
    (max, photo) => (photo.voteCount > max.voteCount ? photo : max),
    data[0],
  );
};
const VoteDetailPage = () => {
  const navigate = useNavigate();
  const agendaData = useRecoilValue(selectedAgenda);
  const setPhotos = useSetRecoilState(selectedAgendaPics);
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const theme = useTheme();

  const handleClickBtn = () => {
    navigate('/vote/list');
  };

  const handleImgClick = (idx: number) => {
    const selectedPhoto = agendaData[0].agendaPhotosList[idx];
    setPhotos(selectedPhoto);
    setIsOpen(true);
  };
  const photoWithMostVotes = findPhotoWithMostVotes(
    agendaData.flatMap((d) => d.agendaPhotosList),
  );
  return (
    <>
      {isOpen && (
        <>
          <VoteResultModal
            title={agendaData[0].title}
            agendaId={agendaData[0].agendaId}
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
      {agendaData.map((data) => (
        <S.Layout key={data.agendaId}>
          <VoteTitle title={data.title} />
          {data.agendaPhotosList.map((photo, i) => (
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
      ))}

      <S.ButtonLayout onClick={handleClickBtn}>
        <S.ButtonText>투표하기</S.ButtonText>
        <CloudBtn width={'30%'} />
      </S.ButtonLayout>
    </>
  );
};

export default VoteDetailPage;
