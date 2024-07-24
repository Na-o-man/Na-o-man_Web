import React from 'react';
import * as S from './Styles';
import { SvgIcon } from './SvgIcon';

interface CarouselItemProps {
  children: React.ReactNode;
  active: boolean;
  'aria-hidden': boolean;
}

const ShareGroupCarouselItem: React.FC<CarouselItemProps> = ({
  children,
  active,
  'aria-hidden': ariaHidden,
}) => {
  return (
    <S.Layout active={active} aria-hidden={ariaHidden}>
      <S.SvgContainer>
        <SvgIcon />
      </S.SvgContainer>
      {children}
    </S.Layout>
  );
};

export default React.memo(ShareGroupCarouselItem);
