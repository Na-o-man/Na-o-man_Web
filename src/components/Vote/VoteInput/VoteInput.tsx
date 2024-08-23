import React, { useEffect } from 'react';
import * as S from './Styles';
import { BoxSmall } from 'assets/icon';
import VoteAddBtn from '../VoteAddBtn/VoteAddBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addedAgendaSrcs, agendaTitle } from 'recoil/states/vote';
import { shareGroupId } from 'recoil/states/share_group';
import { createAgenda } from 'apis/postAgenda';

const VoteInput = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const groupId = useRecoilValue(shareGroupId);
  const [title, setTitle] = useRecoilState(agendaTitle);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const sources = useRecoilValue(addedAgendaSrcs);

  const handleClickBtn = async () => {
    if (groupId) {
      if (!state) {
        alert('사진을 선택해주세요');
        return;
      }
      if (title.length === 0) {
        alert('타이틀을 입력해주세요');
        return;
      }
      if (state.photos.length < 2 || state.photos.length > 6) {
        alert('안건에 등록하는 사진은 최소 2개 최대 6개로 한정 시켜 주세요');
      }
      try {
        const { status, data } = await createAgenda({
          shareGroupId: groupId,
          title: title,
          photos: sources,
        });
        if (status === 200) {
          nav('/vote/list');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <S.Layout>
      <S.TitleContainer>안건</S.TitleContainer>
      <S.InputContainer
        placeholder="안건을 입력해주세요."
        onChange={handleChange}
        defaultValue={title}
      />
      <BoxSmall style={{ position: 'absolute', width: '100%' }} />
      <VoteAddBtn onClick={() => handleClickBtn()} />
    </S.Layout>
  );
};

export default VoteInput;
