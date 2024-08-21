import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { shareGroupListState } from '../../../recoil/states/share_group';
import {
  namesState,
  placeState,
  typeState,
} from '../../../recoil/states/addgroupState';
import axios from 'axios';
import { getCookie } from 'utils/UseCookies';

const API_URL = 'https://api.naoman.site/shareGroups';

const AddGrouploading = () => {
  const navigate = useNavigate();
  const names = useRecoilValue(namesState);
  const selectedTypes = useRecoilValue(typeState);
  const [place] = useRecoilState(placeState);
  const setShareGroupList = useSetRecoilState(shareGroupListState);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);

  // .env 파일에서 토큰 가져오기
  const token = getCookie('access-token');

  useEffect(() => {
    if (isCreatingGroup) return;

    const createShareGroup = async () => {
      const requestData = {
        memberNameList: names,
        meetingTypeList: selectedTypes.filter(Boolean),
        place,
      };

      try {
        const response = await axios.post(API_URL, requestData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status === 200) {
          // 상태 업데이트
          const newGroup = {
            shareGroupId: response.data.data.shareGroupId,
            name: response.data.data.name,
            image: response.data.data.image,
            memberCount: response.data.data.memberCount,
            createdAt: response.data.data.createdAt,
            inviteUrl: response.data.data.inviteUrl,
            inviteCode: response.data.data.inviteCode,
          };
          setShareGroupList((prevList) => [...(prevList || []), newGroup]);
          navigate('/group/add/groupshare', {
            state: {
              shareGroupId: newGroup.shareGroupId,
              inviteCode: newGroup.inviteCode,
              name: newGroup.name,
            },
          });
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
        alert('그룹 생성에 실패했습니다.');
        navigate('/group/add/member');
      } finally {
        setIsCreatingGroup(false);
      }
    };

    setIsCreatingGroup(true);
    createShareGroup();
  }, [
    navigate,
    names,
    selectedTypes,
    place,
    setShareGroupList,
    token,
    isCreatingGroup,
  ]);

  return (
    <S.Layout>
      <S.Fly />
      <S.Text>그룹 생성 중입니다...</S.Text>
    </S.Layout>
  );
};

export default AddGrouploading;
