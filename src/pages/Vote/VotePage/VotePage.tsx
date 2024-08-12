import React, { useState } from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudNextBtn } from 'assets/icon';
import VoteModal from 'components/Vote/VoteModal/VoteModal';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { isModalOpen, selectedPic, registeredPics } from 'recoil/states/vote';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserState } from 'recoil/states/enter';

const VotePage = () => {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;
  const pictures = useRecoilValue(registeredPics);
  const [selectedPicture, setSelectedPic] = useRecoilState(selectedPic);
  const resetSelect = useResetRecoilState(selectedPic);
  const profile = useRecoilValue(UserState);
  const [click, setClick] = useState(false);

  const handleClickBtn = () => {
    navigate('/vote/list');
  };
  const handleImgClick = (idx: number) => {
    setIsOpen(true);
    setSelectedPic(pictures[idx]);
  };
  const handleCloseClick = () => {
    resetSelect();
  };

  return (
    <>
      {isOpen && <VoteModal />}
      <S.Layout>
        <VoteTitle title={title} />
        {pictures.map((pic, idx) => (
          <S.Container key={pic.pictureId}>
            <S.ImgLayout>
              <S.ImgBox src={pic.url} onClick={() => handleImgClick(idx)} />
            </S.ImgLayout>
            {selectedPicture.comment &&
              selectedPicture.pictureId === pic.pictureId && (
                <S.VoterLayout click={click}>
                  <S.VoterBox
                    src={profile.image}
                    onClick={() => setClick(!click)}
                  />
                  <S.VoterContainer click={click}>
                    {selectedPicture.comment}
                    <S.CloseButton onClick={handleCloseClick} />
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
