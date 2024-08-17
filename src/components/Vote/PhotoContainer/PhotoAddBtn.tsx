import React, { useState } from 'react';
import * as S from './Styles';
import { AddVoteBtn } from 'assets/icon';
import {
  dropDownTitle,
  shareGroupId,
  shareGroupMemberListState,
} from 'recoil/states/share_group';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const PhotoAddBtn = () => {
  const nav = useNavigate();
  const members = useRecoilValue(shareGroupMemberListState);
  const groupID = useRecoilValue(shareGroupId);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const setTitle = useSetRecoilState(dropDownTitle);

  const handleClickName = (id: number) => {
    const idx = members.findIndex((m) => m.profileId === id);
    setTitle(members[idx].name);
    nav('/group/detail', {
      state: { shareGroupId: groupID, profileId: id, choiceMode: true },
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
                onClick={() => handleClickName(mem.profileId)}
              >
                {mem.name}
              </S.ItemLayout>
            ))}
          </S.ListContainer>
        </S.ListLayout>
      )}
      <AddVoteBtn style={{ width: '10%', zIndex: 1 }} onClick={handleClick} />
    </S.ButtonLayout>
  );
};

export default PhotoAddBtn;
