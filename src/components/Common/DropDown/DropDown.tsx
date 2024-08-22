import { DownArrow, IndexTag } from 'assets/icon';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  shareGroupListState,
  dropDownTitle,
  shareGroupId,
  selectedGroupName,
} from 'recoil/states/share_group';
import * as S from './Styles';

const DropDown: React.FC = () => {
  const shareGroupList = useRecoilValue(shareGroupListState);
  const [title, setTitle] = useRecoilState(dropDownTitle);
  const [selectedId, setSelectedId] = useRecoilState(shareGroupId);
  const [isClicked, setIsClicked] = useState(false);
  const groupName = useRecoilValue(selectedGroupName);

  useEffect(() => {
    if (shareGroupList.length > 0) {
      setTitle(groupName);
    }
  }, [shareGroupList, setTitle, setSelectedId]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleItemClick = (index: number) => {
    const selectedGroup = shareGroupList[index];
    setTitle(selectedGroup.name);
    setSelectedId(selectedGroup.shareGroupId);
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    console.log('Selected ShareGroupId:', selectedId);
  }, [selectedId]);

  const txtlen = title.length;

  return (
    <>
      {isClicked ? (
        <S.ExpendLayout txtlen={txtlen}>
          <S.IconLayout>
            <DownArrow />
          </S.IconLayout>
          <S.ListLayout>
            {shareGroupList.map((group, i) =>
              group.name === title ? (
                <S.ItemLayout
                  key={i}
                  style={{ fontWeight: '700' }}
                  onClick={() => handleItemClick(i)}
                >
                  {group.name}
                </S.ItemLayout>
              ) : (
                <S.ItemLayout key={i} onClick={() => handleItemClick(i)}>
                  {group.name}
                </S.ItemLayout>
              ),
            )}
          </S.ListLayout>
        </S.ExpendLayout>
      ) : (
        <S.Layout onClick={handleClick} txtlen={txtlen}>
          <IndexTag transform="scale(1.2)" />
          <S.TextLayout txtlen={txtlen}>
            <DownArrow />
            {title}
          </S.TextLayout>
        </S.Layout>
      )}
    </>
  );
};

export default DropDown;
