import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  namesState,
  newGroupData,
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
  const [isCreatingGroup, setIsCreatingGroup] = useState(true);
  const setNewGroup = useSetRecoilState(newGroupData);

  // .env 파일에서 토큰 가져오기
  const token = getCookie('access-token');

  const createShareGroup = async () => {
    const requestData = {
      memberNameList: names,
      meetingTypeList: selectedTypes.filter(Boolean),
      place,
    };
    if (isCreatingGroup) {
      try {
        const response = await axios.post(API_URL, requestData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = response;
        if (response.data.status === 200) {
          const date = data.data.createdAt.substring(0, 10);
          const newgroup = {
            name: data.data.name,
            memberCount: data.data.count,
            createdAt: date,
          };
          setNewGroup(newgroup);
          navigate('/group/add/groupshare', {
            state: {
              shareGroupId: data.data.shareGroupId,
              inviteCode: data.data.inviteCode,
              name: data.data.name,
            },
          });
          setIsCreatingGroup(false);
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
        alert('그룹 생성에 실패했습니다.');
        navigate('/group/add/member');
      }
    }
  };

  useEffect(() => {
    createShareGroup();
  }, [navigate, names, selectedTypes, place, token, isCreatingGroup]);

  return (
    <S.Layout>
      <S.Fly />
      <S.Text>그룹 생성 중입니다...</S.Text>
    </S.Layout>
  );
};

export default AddGrouploading;
