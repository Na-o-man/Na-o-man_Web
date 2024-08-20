import React, { useEffect } from 'react';
import * as S from './Styles';
import { BoxSmall } from 'assets/icon';
import VoteAddBtn from '../VoteAddBtn/VoteAddBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { agendaTitle } from 'recoil/states/vote';
import { shareGroupId } from 'recoil/states/share_group';
import { createAgenda } from 'apis/postAgenda';

const VoteInput = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const groupID = useRecoilValue(shareGroupId);
  const [title, setTitle] = useRecoilState(agendaTitle);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleClickBtn = async () => {
    if (state && groupID) {
      try {
        const agendaId = await createAgenda({
          shareGroupId: groupID,
          title: title,
          photos: state.photos,
        });
        nav('/vote/excute', { state: { agendaId: agendaId } });
      } catch (er) {
        console.error(er);
      }
    }
  };
  useEffect(() => {
    setTitle('');
  }, []);
  return (
    <S.Layout>
      <S.TitleContainer>안건</S.TitleContainer>
      <S.InputContainer
        placeholder="안건을 입력해주세요."
        onChange={handleChange}
        defaultValue={title}
      />
      <BoxSmall style={{ position: 'absolute', width: '85%' }} />
      <VoteAddBtn onClick={() => handleClickBtn()} />
    </S.Layout>
  );
};

export default VoteInput;
