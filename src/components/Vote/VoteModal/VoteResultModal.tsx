import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { CloseModalGrey } from 'assets/icon';
import { useSetRecoilState } from 'recoil';
import CommentBox from '../CommentBox/CommentBox';
import VoteTitle from '../VoteTitle/VoteTitle';
import { isModalOpen } from 'recoil/states/vote';
import { AgendaPhotoInfo, agendaPhotosListType } from 'recoil/types/vote';

interface VoteResultModalProps {
  title: string;
  agendaId: number;
  data: agendaPhotosListType;
}

const VoteResultModal = ({ title, agendaId, data }: VoteResultModalProps) => {
  const setIsOpen = useSetRecoilState(isModalOpen);
  const [agendaDetail, setAgendaDetail] = useState<AgendaPhotoInfo[] | null>(
    null,
  );

  const handleIconClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // //안건 상세 조회 api
    // const getAgendaDetail = async () => {
    //   try {
    //     const result = await fetchAgendaDetail(agendaId);
    //     console.log(result);
    //     setAgendaDetail(result.agendaPhotoInfoList); // 데이터 저장
    //   } catch (err) {
    //     setError('Failed to fetch agenda details');
    //   }
    // };
    // getAgendaDetail();
  }, [agendaId]);
  //안건 상세 조회 api ->  || !agendaDetail  추가
  if (!data) {
    return null; // 데이터가 없는 경우 컴포넌트를 렌더링하지 않음
  }

  return (
    <S.ModalLayout>
      <VoteTitle clicked title={title} />
      <S.ImgLayout>
        <S.IconLayout onClick={handleIconClick}>
          <CloseModalGrey width={'70%'} />
        </S.IconLayout>
        <S.ImgContainer src={data.url} />
        {agendaDetail && agendaDetail.length > 0 && (
          <S.ImgContainer src={agendaDetail[0].url} /> // 첫 번째 이미지 URL을 사용
        )}
      </S.ImgLayout>
      <S.VoterLayout>
        {data.votesList.map((vote) => (
          <S.VoterContainer key={vote.voteId}>
            <S.VoterBox src={vote.profileInfo.profileImage} />
          </S.VoterContainer>
        ))}
      </S.VoterLayout>
      <S.CommentLayout>
        {data.votesList.map((vote) => (
          <CommentBox
            key={vote.voteId}
            comment={vote.comment}
            name={vote.profileInfo.name}
            profileImage={vote.profileInfo.profileImage}
          />
        ))}
      </S.CommentLayout>
    </S.ModalLayout>
  );
};

export default VoteResultModal;
