import React from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudBtn, ModalBack } from 'assets/icon';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isModalOpen, selectedPhoto } from 'recoil/states/vote';
import VoterBox from 'components/Vote/VoterBox/VoterBox';
import { useNavigate } from 'react-router-dom';
import VoteResultModal from 'components/Vote/VoteModal/VoteResultModal';
import { selectedAgenda } from 'recoil/selectors/vote';

const VoteDetailPage = () => {
  const navigate = useNavigate();
  const agendaData = useRecoilValue(selectedAgenda);
  const setPhotos = useSetRecoilState(selectedPhoto);
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const handleClickBtn = () => {
    navigate('/vote/list');
  };

  const handleImgClick = (idx: number) => {
    setPhotos(agendaData[0].agendaPhotosList[idx]);
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && (
        <>
          <VoteResultModal title={agendaData[0].title} />
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
              <S.ImgBox src={photo.url} onClick={() => handleImgClick(i)} />
              <VoterBox member={photo.votesList} />
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
