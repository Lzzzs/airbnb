import React, { memo } from 'react';
import Logo from '@/assets/svg/logo.jsx';
import { HeaderLeftrWrapper } from './style';

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftrWrapper>
      <Logo />
    </HeaderLeftrWrapper>
  );
});

export default HeaderLeft;
