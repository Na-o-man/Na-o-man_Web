import { DownArrow, IndexTag } from 'assets/icon';
import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { ShareGroup, shareGroupId } from 'recoil/states/share_group';
import { dropdownData } from 'recoil/states/vote';

interface DropDownProps {
  noIndexTag?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ noIndexTag }) => {
  const groupData = useRecoilValue<ShareGroup[]>(dropdownData);
  const groupID = useRecoilValue(shareGroupId);
  const Idx = groupData.findIndex((data) => data.shareGroupId === groupID);
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState<string>(groupData[Idx].name);
  const txtlen = title.length;
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleItemClick = (index: number) => {
    setTitle(groupData[index].name);
    setIsClicked(false);
  };
  return (
    <>
      {isClicked ? (
        <S.ExpendLayout txtlen={txtlen}>
          <S.IconLayout>
            <DownArrow />
          </S.IconLayout>
          <S.ListLayout>
            {groupData.map((data, i) =>
              groupData[i].name === title ? (
                <S.ItemLayout
                  key={i}
                  style={{ fontWeight: '700' }}
                  onClick={() => handleItemClick(i)}
                >
                  {data.name}
                </S.ItemLayout>
              ) : (
                <S.ItemLayout key={i} onClick={() => handleItemClick(i)}>
                  {data.name}
                </S.ItemLayout>
              ),
            )}
          </S.ListLayout>
        </S.ExpendLayout>
      ) : (
        <S.Layout onClick={handleClick} txtlen={txtlen}>
          {noIndexTag ? null : <IndexTag style={{ transform: 'scale(1.3)' }} />}
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
