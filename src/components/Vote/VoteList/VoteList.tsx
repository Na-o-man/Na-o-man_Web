import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import VoteContainer from '../VoteContainer/VoteContainer';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { agendasList, agendaTitle } from 'recoil/states/vote';
import axios from 'axios';
import { getCookie } from 'utils/UseCookies';
import { shareGroupId } from 'recoil/states/share_group';
import Loading from 'components/Loading/Loading';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const token = getCookie('access-token');

const VoteList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupId = useRecoilValue(shareGroupId);
  const [agendas, setAgendas] = useRecoilState(agendasList);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const setTitle = useSetRecoilState(agendaTitle);

  // 안건 목록 조회 API 함수
  const fetchAgendas = async (page: number) => {
    if (!groupId) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${SERVER_URL}/agendas`, {
        params: {
          shareGroupId: groupId,
          page,
          size: itemsPerPage,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const { agendaDetailInfoList, totalPages } = response.data.data;

      if (agendaDetailInfoList.length === 0) {
        // 안건이 없는 경우 /vote 페이지로 이동
        navigate('/vote', { replace: true });
        return;
      }

      // 안건이 있는 경우 상태 업데이트 및 /vote/list로 이동
      setAgendas((prevAgendas) => [...prevAgendas, ...agendaDetailInfoList]);
      setTotalPages(totalPages);
      if (location.pathname !== '/vote/list') {
        navigate('/vote/list', { replace: true });
      }
    } catch (error: any) {
      setError(error.message || 'Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 새로운 그룹을 선택할 때마다 기존 안건 목록 초기화 및 첫 페이지 호출
    setAgendas([]);
    setCurrentPage(0);
    fetchAgendas(0);
    setTitle('');
  }, [groupId]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, currentPage, totalPages]);

  const handleClickBtn = (i: number) => {
    navigate('/vote/detail', { state: { agendaData: agendas[i] } });
  };

  if (isLoading && agendas.length === 0)
    return <Loading text="안건 목록 조회 중입니다..." />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {agendas.map((ag, i) => (
        <S.Layout key={ag.agendaId} onClick={() => handleClickBtn(i)}>
          <S.TextLayout>{ag.title}</S.TextLayout>
          <VoteContainer data={ag.agendaPhotoInfoList} />
        </S.Layout>
      ))}
    </>
  );
};

export default VoteList;
