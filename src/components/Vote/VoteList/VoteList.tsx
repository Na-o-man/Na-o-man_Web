import React from 'react';
import * as S from './Styles';
import VoteContainer from '../VoteContainer/VoteContainer';
import { useNavigate } from 'react-router-dom';
import { agendasList, selectedAgendaId } from 'recoil/states/vote';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const VoteList = () => {
  const agendas = useRecoilValue(agendasList);
  const setAgendaId = useSetRecoilState(selectedAgendaId);
  const navigate = useNavigate();
  const handleClickBtn = (id: number) => {
    setAgendaId(id);
    navigate('/vote/detail');
    console.log(id);
  };
  return (
    <>
      {agendas.map((ag) => (
        <S.Layout key={ag.agendaId} onClick={() => handleClickBtn(ag.agendaId)}>
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
