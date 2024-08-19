import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import VoteContainer from '../VoteContainer/VoteContainer';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { agendasList } from 'recoil/states/vote';
import { selectedShareGroupId } from 'recoil/states/share_group';
import { useSwipeable } from 'react-swipeable';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const token = process.env.REACT_APP_REFRESH_TOKEN;

const VoteList: React.FC = () => {
  const navigate = useNavigate();
  const [shareGroupId] = useRecoilState(selectedShareGroupId);
  const [agendas, setAgendas] = useRecoilState(agendasList);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 안건 목록 조회 API 함수
  const fetchAgendas = async (page: number) => {
    if (!shareGroupId) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${SERVER_URL}/agendas`, {
        params: {
          shareGroupId,
          page,
          size: itemsPerPage,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const { agendaDetailInfoList, totalPages } = response.data.data;
      console.log('Fetched Agendas:', agendaDetailInfoList);

      setAgendas(agendaDetailInfoList);
      setTotalPages(totalPages);
    } catch (error: any) {
      setError(error.message || 'Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  //투표현황 조회 api
  const fetchVoteInfo = async (agendaId: number) => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/agendas/${agendaId}/vote`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data.data; // voteInfoList 반환
    } catch (error: any) {
      console.error('Error fetching vote info:', error.message || error);
      return [];
    }
  };

  useEffect(() => {
    fetchAgendas(currentPage);
  }, [shareGroupId, currentPage]);

  const handleSwipeLeft = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,

    trackMouse: true,
  });

  const handleClickBtn = (id: number) => {
    navigate('/vote/detail');
    console.log(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (agendas.length === 0) return <div>No agendas available</div>;

  return (
    <div {...handlers}>
      {agendas.map((ag) => (
        <S.Layout key={ag.agendaId} onClick={() => handleClickBtn(ag.agendaId)}>
          <S.TextLayout>{ag.title}</S.TextLayout>
          <S.VoteContainer>
            <VoteContainer data={ag.agendaPhotoInfoList} />
          </S.VoteContainer>
        </S.Layout>
      ))}
    </div>
  );
};

export default VoteList;
