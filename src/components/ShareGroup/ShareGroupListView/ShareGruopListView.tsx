import React, { useEffect, useState } from 'react';
import ShareGroupListItem from '../ShareGroupListItem/ShareGroupListItem';
import * as S from './Styles';

interface ListViewProps {
  items: Array<{
    id: number;
    title: string;
    date: string;
    peopleCount: number;
  }>;
}

const ShareGruopListView: React.FC<ListViewProps> = ({ items }) => {
  return (
    <S.Layout>
      {items.map((item) => (
        <S.Container key={item.id}>
          <ShareGroupListItem {...item} />
        </S.Container>
      ))}
      <S.Cloud />
    </S.Layout>
  );
};

export default ShareGruopListView;
