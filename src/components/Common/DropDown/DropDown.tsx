import { DownArrow, IndexTag } from 'assets/icon';
import React, { useState } from 'react';
import * as S from './Styles';

const mockData = ['제주도', '2024 졸업전시', '보라카이', '제주도 에코랜드'];

const DropDown = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState(mockData[0]);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleItemClick = (index: number) => {
    console.log(mockData[index]);
    setTitle(mockData[index]);
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
            {mockData.map((data, i) =>
              mockData[i] === title ? (
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
          <IndexTag />
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
