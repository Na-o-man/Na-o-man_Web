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
    if (groupID) {
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
          shareGroupId: groupID,
          title: title,
          photos: state.photos,
        });
        if (status === 200) {
          const agendaId = data.agendaId;
          nav('/vote/excute', { state: { agendaId: agendaId } });
        }
      } catch (error) {
        console.error(error);
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
