import React from 'react';
import * as S from './Styles';
import sample from '../../../assets/icon/vote/sample_img.png';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudBtn } from 'assets/icon';
import { useRecoilState } from 'recoil';
import { isModalOpen } from 'recoil/states/vote';
import VoterBox from 'components/Vote/VoterBox/VoterBox';
import { useNavigate } from 'react-router-dom';
import VoteResultModal from 'components/Vote/VoteModal/VoteResultModal';

const VoteDetailPage = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate('/vote/list');
  };
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const handleImgClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && <VoteResultModal />}
      <VoteTitle />
      <S.Layout>
        <S.ImgLayout>
          <S.ImgBox src={sample} onClick={handleImgClick} />
          <VoterBox />
        </S.ImgLayout>
        <S.ImgLayout>
          <S.ImgBox src={sample} onClick={handleImgClick} />
        </S.ImgLayout>
        <S.ImgLayout>
          <S.ImgBox src={sample} onClick={handleImgClick} />
        </S.ImgLayout>
        <S.ImgLayout>
          <S.ImgBox src={sample} onClick={handleImgClick} />
        </S.ImgLayout>
      </S.Layout>
      <S.ButtonLayout onClick={handleClickBtn}>
        <S.ButtonText>투표하기</S.ButtonText>
        <CloudBtn width={'30%'} />
      </S.ButtonLayout>
    </>
  );
};

export default VoteDetailPage;
