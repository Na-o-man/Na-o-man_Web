import React from 'react';
import * as S from './Styles';
import ShareGroupImageItem from '../ShareGroupImageItem/ShareGroupImageItem';

const ShareGroupImageList: React.FC = () => {
  const items: string[] = [
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
    'https://images.unsplash.com/photo-1623666301163-3b7b0c7b7b4c',
  ];
  return (
    <S.Layout>
      {items.map((item, index) => (
        <ShareGroupImageItem key={index} src={item} selected={false} />
      ))}
    </S.Layout>
  );
};

export default ShareGroupImageList;
