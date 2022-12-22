import React, { memo } from 'react';
import HeaderLeft from './c-cpns/header-left';
import HeaderCenter from './c-cpns/header-center';
import HeaderRight from './c-cpns/header-right';

import { HeaderWrapper } from './style';

const header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft>left</HeaderLeft>
      <HeaderCenter>left</HeaderCenter>
      <HeaderRight>left</HeaderRight>
    </HeaderWrapper>
  );
});

export default header;
