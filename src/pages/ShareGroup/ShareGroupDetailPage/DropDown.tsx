import { DownArrow } from 'assets/icon';
import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  photoRequestState,
  photoTypeState,
  shareGroupMemberListState,
} from 'recoil/states/share_group';
import { useNavigate, useParams } from 'react-router-dom';
import { albumDropDownTitle } from 'recoil/states/vote';

const DropDown: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { id, profileId } = useParams();
  const navigator = useNavigate();
  const members = useRecoilValue(shareGroupMemberListState);
  const names = members
    ?.filter((mem) => mem.memberId !== null)
    .map((mem) => {
      return { name: mem.name, profileId: mem.profileId };
    });
  const [title, setTitle] = useRecoilState(albumDropDownTitle);
  const setPhotoType = useSetRecoilState(photoTypeState);
  const setRequestState = useSetRecoilState(photoRequestState);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleItemClick = (idx: number, name: string) => {
    navigator(`/group/${id}/${names[idx].profileId}`, { replace: true });

    // 죽은 코드
    if (name === '모든 사진') {
      setPhotoType('all');
    } else if (name === '기타 사진') {
      setPhotoType('etc');
    } else {
      setPhotoType(null);
    }
    setIsClicked(false);
    setTitle(names[idx].name);
    const newData = {
      shareGroupId: Number(id),
      profileId: Number(profileId),
      size: 20,
    };
    setRequestState(newData);
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
                  onClick={() => handleItemClick(i, name.name)}
                  style={{ fontWeight: '700' }}
                >
                  {name.name}
                </S.DropDownItem>
              ) : (
                <S.DropDownItem
                  key={i}
                  onClick={() => handleItemClick(i, name.name)}
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
