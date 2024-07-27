import React from 'react';
import * as S from './Styles';
import sample from '../../../assets/icon/vote/sample_img.png';
import VoteTitle from 'components/Vote/VoteTitle/VoteTitle';
import { CloudNextBtn } from 'assets/icon';
import VoteModal from 'components/Vote/VoteModal/VoteModal';
import { useRecoilState } from 'recoil';
import { isModalOpen } from 'recoil/states/vote';
import MyComment from 'components/Vote/MyComment/MyComment';
import { useNavigate } from 'react-router-dom';

const VotePage = () => {
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
      {isOpen && <VoteModal />}
      <VoteTitle />
      <S.Layout>
        <S.ImgLayout>
          <S.ImgBox src={sample} onClick={handleImgClick} />
          <MyComment />
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
        <CloudNextBtn width={'25%'} />
      </S.ButtonLayout>
    </>
  );
};

export default VotePage;
