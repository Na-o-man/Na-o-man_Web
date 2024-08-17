import { DownArrow } from 'assets/icon';
import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  dropDownTitle,
  shareGroupMemberListState,
} from 'recoil/states/share_group';

interface RequestData {
  shareGroupId: number;
  profileId: number;
}

interface DropDownProps {
  groupId: number;
  setter: React.Dispatch<React.SetStateAction<RequestData>>;
}

const DropDown: React.FC<DropDownProps> = ({ groupId, setter }) => {
  const [isClicked, setIsClicked] = useState(false);
  const members = useRecoilValue(shareGroupMemberListState) || [];
  const names = members
    ?.filter((mem) => mem.memberId !== null)
    .map((mem) => {
      return { name: mem.name, profileId: mem.profileId };
    });
  const [title, setTitle] = useRecoilState(dropDownTitle);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleItemClick = (idx: number, profileId: number) => {
    setIsClicked(false);
    setTitle(names[idx].name);
    const newData = { shareGroupId: groupId, profileId: profileId };
    setter(newData);
  };

  return (
    <>
      {isClicked ? (
        <S.DropDownExpend>
          <S.DropDownIcon>
            <DownArrow />
          </S.DropDownIcon>
          <S.DropDownList>
            {names.map((name, i) =>
              names[i].name === title ? (
                <S.DropDownItem
                  key={i}
                  onClick={() => handleItemClick(i, name.profileId)}
                  style={{ fontWeight: '700' }}
                >
                  {name.name}
                </S.DropDownItem>
              ) : (
                <S.DropDownItem
                  key={i}
                  onClick={() => handleItemClick(i, name.profileId)}
                >
                  {name.name}
                </S.DropDownItem>
              ),
            )}
          </S.DropDownList>
        </S.DropDownExpend>
      ) : (
        <S.DropDownLayout onClick={handleClick}>
          <S.DropDownText>
            <DownArrow />
            {title}
          </S.DropDownText>
        </S.DropDownLayout>
      )}
    </>
  );
};

export default DropDown;
