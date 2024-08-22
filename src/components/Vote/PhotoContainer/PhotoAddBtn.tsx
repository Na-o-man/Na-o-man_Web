import React, { useState } from 'react';
import * as S from './Styles';
import { AddVoteBtn } from 'assets/icon';
import {
  dropDownTitle,
  photoRequestState,
  photoTypeState,
  shareGroupId,
  shareGroupMemberListState,
} from 'recoil/states/share_group';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const PhotoAddBtn = () => {
  const nav = useNavigate();
  const members = useRecoilValue(shareGroupMemberListState);
  const groupId = useRecoilValue(shareGroupId);
  const [isClicked, setIsClicked] = useState(false);
  const setTitle = useSetRecoilState(dropDownTitle);
  const setPhotoRequest = useSetRecoilState(photoRequestState);
  const setType = useSetRecoilState(photoTypeState);

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
