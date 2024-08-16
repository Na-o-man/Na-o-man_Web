import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import VoteContainer from '../VoteContainer/VoteContainer';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { agendasList, selectedAgendaId } from 'recoil/states/vote';
import { useSwipeable } from 'react-swipeable';
import axios from 'axios';
import { deleteAgenda } from 'apis/deleteAgenda';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const VoteList = () => {
  // Recoil 상태에서 미리 설정된 값을 가져옵니다
  const agendas = useRecoilValue(agendasList);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(Math.ceil(agendas.length / 5)); // 총 페이지 수를 설정합니다

  const itemsPerPage = 5; // 한 페이지에 표시할 안건 개수

  const currentAgendas = agendas.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  // API 호출 주석 처리
  /*
  const fetchAgendas = async (page: number) => {
    try {
      const response = await axios.get(`${SERVER_URL}/agendas`, {
        params: {
          sharegroupid: 'your-sharegroup-id', // 실제 값으로 변경
          page: page,
          size: itemsPerPage,
        },
      });
      const { agendaDetailInfoList, totalPages } = response.data.data;
      setAgendas(agendaDetailInfoList);
      setTotalPages(totalPages);
    } catch (error: any) {
      setError(error.message || 'Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAgendas(currentPage);
  }, [currentPage]);
  */

  //delete api 호출 주석처리
  /*
  const handleDelete = async (id: number) => {
    try {
      await deleteAgenda({ agendaId: id }); // 객체 형태로 전달
      // 삭제 후 상태를 새로 고칩니다
      fetchAgendas(currentPage);
    } catch (error) {
      console.error('Error deleting agenda:', error);
      setError('Failed to delete agenda');
    }
  };
  */
  const handleClickBtn = (id: number) => {
    // setAgendaId(id);
    navigate('/vote/detail');
    console.log(id);
  };

  // 스와이프 핸들러 설정
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    },
  });

  return (
    <div {...handlers}>
      {currentAgendas.map((ag) => (
        <S.Layout key={ag.agendaId} onClick={() => handleClickBtn(ag.agendaId)}>
          <S.TextLayout>{ag.title}</S.TextLayout>
          <S.VoteContainer>
            <VoteContainer data={ag.agendaPhotosList} />
          </S.VoteContainer>
        </S.Layout>
      ))}
    </div>
  );
};

export default VoteList;
