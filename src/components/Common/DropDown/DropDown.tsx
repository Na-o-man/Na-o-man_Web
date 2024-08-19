import { DownArrow, IndexTag } from 'assets/icon';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  shareGroupListState,
  dropDownTitle,
  selectedShareGroupId,
} from 'recoil/states/share_group';
import * as S from './Styles';

interface DropDownProps {
  noIndexTag?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ noIndexTag }) => {
  const shareGroupList = useRecoilValue(shareGroupListState);
  const [title, setTitle] = useRecoilState(dropDownTitle);
  const [selectedId, setSelectedId] = useRecoilState(selectedShareGroupId);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (shareGroupList.length > 0) {
      setTitle(shareGroupList[0].name);
      setSelectedId(shareGroupList[0].shareGroupId);
    }
  }, [shareGroupList, setTitle, setSelectedId]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleItemClick = (index: number) => {
    const selectedGroup = shareGroupList[index];
    setTitle(selectedGroup.name);
    setSelectedId(selectedGroup.shareGroupId);
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
          {noIndexTag ? null : <IndexTag />}
          <S.TextLayout txtlen={txtlen}>
            <DownArrow />
            {title || 'Select Group'}
          </S.TextLayout>
        </S.Layout>
      )}
    </>
  );
};

export default DropDown;
