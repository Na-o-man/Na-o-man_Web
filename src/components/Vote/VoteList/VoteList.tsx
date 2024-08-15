import React from 'react';
import * as S from './Styles';
import VoteContainer from '../VoteContainer/VoteContainer';
import { useNavigate } from 'react-router-dom';
import { agendasList } from 'recoil/states/vote';
import { useRecoilValue } from 'recoil';
import { agendasListType } from 'recoil/types/vote';

const VoteList = () => {
  const agendas = useRecoilValue(agendasList);
  const navigate = useNavigate();
  const handleClickBtn = (agendaData: agendasListType) => {
    navigate('/vote/detail', { state: { agendaData } });
  };
  return (
    <>
      {agendas.map((ag) => (
        <S.Layout key={ag.agendaId} onClick={() => handleClickBtn(ag)}>
          <S.TextLayout>{ag.title}</S.TextLayout>
          <S.VoteContainer>
            <VoteContainer data={ag.agendaPhotosList} />
          </S.VoteContainer>
        </S.Layout>
      ))}
    </>
  );
};

export default VoteList;
