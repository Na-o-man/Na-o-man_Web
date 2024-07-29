import { DownArrow, IndexTag } from 'assets/icon';
import React, { useState } from 'react';
import * as S from './Styles';

interface DropDownProps {
  noIndexTag?: boolean;
  dataList: string[];
}

const DropDown: React.FC<DropDownProps> = ({ noIndexTag, dataList }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState(dataList[0]);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleItemClick = (index: number) => {
    setTitle(dataList[index]);
    setIsClicked(false);
  };
  return (
    <>
      {isClicked ? (
        <S.ExpendLayout>
          <S.IconLayout>
            <DownArrow />
          </S.IconLayout>
          <S.ListLayout>
            {dataList.map((data, i) =>
              dataList[i] === title ? (
                <S.ItemLayout
                  key={i}
                  style={{ fontWeight: '700' }}
                  onClick={() => handleItemClick(i)}
                >
                  {data}
                </S.ItemLayout>
              ) : (
                <S.ItemLayout key={i} onClick={() => handleItemClick(i)}>
                  {data}
                </S.ItemLayout>
              ),
            )}
          </S.ListLayout>
        </S.ExpendLayout>
      ) : (
        <S.Layout onClick={handleClick}>
          {noIndexTag ? null : <IndexTag />}
          <S.TextLayout>
            <DownArrow />
            {title}
          </S.TextLayout>
        </S.Layout>
      )}
    </>
  );
};

export default DropDown;
