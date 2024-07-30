import React from 'react';
import * as S from './Styles';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudNextBtn } from 'assets/icon';
import VoteModal from 'components/Vote/VoteModal/VoteModal';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isModalOpen, selectedPic } from 'recoil/states/vote';
import VoterBox from 'components/Vote/VoterBox/VoterBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { registeredPics } from 'recoil/states/vote';

const VotePage = () => {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;
  const pictures = useRecoilValue(registeredPics);
  const setSelectedPic = useSetRecoilState(selectedPic);
  const handleClickBtn = () => {
    navigate('/vote/list');
  };
  const handleImgClick = (idx: number) => {
    setIsOpen(true);
    setSelectedPic(pictures[idx]);
  };
  return (
    <>
      {isOpen && <VoteModal />}
      <S.Layout>
        <VoteTitle title={title} />
        {pictures.map((pic, idx) => (
          <S.ImgLayout key={pic.pictureId}>
            <S.ImgBox src={pic.url} onClick={() => handleImgClick(idx)} />
          </S.ImgLayout>
        ))}
        <S.ButtonLayout onClick={handleClickBtn}>
          <CloudNextBtn width={'30%'} />
        </S.ButtonLayout>
      </S.Layout>
    </>
  );
};

export default VotePage;
