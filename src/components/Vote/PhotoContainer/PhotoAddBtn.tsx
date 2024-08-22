import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { AddVoteBtn } from 'assets/icon';
import {
  dropDownTitle,
  photoRequestState,
  photoTypeState,
  shareGroupId,
  shareGroupMemberListState,
} from 'recoil/states/share_group';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { getShareGroupMembers } from 'apis/getMyShareGroup';
import {
  filteredProfile,
  profile,
} from 'pages/ShareGroup/ShareGroupFolder/ShareGroupFolder';

const PhotoAddBtn = () => {
  const nav = useNavigate();
  const members = useRecoilValue(shareGroupMemberListState);
  const groupId = useRecoilValue(shareGroupId);
  const [isClicked, setIsClicked] = useState(false);
  const setTitle = useSetRecoilState(dropDownTitle);
  const setPhotoRequest = useSetRecoilState(photoRequestState);
  const setType = useSetRecoilState(photoTypeState);
  const setShareGroupMember = useSetRecoilState(shareGroupMemberListState);

  useEffect(() => {
    getShareGroupMembers(groupId).then((res) => {
      if (res.data.hasOwnProperty('profileInfoList')) {
        // memberId가 null인 프로필은 제외
        const fileterdProfileInfoLists: filteredProfile[] =
          res.data.profileInfoList.filter(
            (profile: profile) => profile.memberId !== null,
          );
        // 전체 사진 폴더와 기타 폴더 추가
        setShareGroupMember([
          ...fileterdProfileInfoLists,
          {
            profileId: 0,
            name: '모든 사진',
            image: '',
            memberId: 0,
            isAllPhoto: true,
          },
          {
            profileId: 0,
            name: '기타 사진',
            image: '',
            memberId: 0,
            isEtcPhoto: true,
          },
        ]);
      }
    });
  }, [groupId]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClickName = (id: number, name: string) => {
    const idx = members.findIndex((m) => m.profileId === id);
    setTitle(members[idx].name);
    if (id === 0) {
      if (name === '모든 사진') {
        setType('all');
      } else if (name === '기타 사진') {
        setType('etc');
      }
    } else {
      setType(null);
    }
    const data = { shareGroupId: groupId, profileId: id, size: 20 };
    setPhotoRequest(data);
    nav('/group/detail', {
      state: { choiceMode: true },
    });
  };
  return (
    <S.ButtonLayout>
      {isClicked && (
        <S.ListLayout>
          <S.ListContainer>
            {members.map((mem, i) => (
              <S.ItemLayout
                key={i}
                onClick={() => handleClickName(mem.profileId, mem.name)}
              >
                {mem.name}
              </S.ItemLayout>
            ))}
          </S.ListContainer>
        </S.ListLayout>
      )}
      <AddVoteBtn style={{ width: '10%', zIndex: 500 }} onClick={handleClick} />
    </S.ButtonLayout>
  );
};

export default PhotoAddBtn;
