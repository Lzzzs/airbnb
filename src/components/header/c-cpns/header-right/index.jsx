import React, { memo } from 'react';
import { HeaderRightWrapper } from './style';

import IconGlobal from '../../../../assets/svg/icon-global';
import IconMenu from '../../../../assets/svg/icon-menu';
import IconAvatar from '../../../../assets/svg/icon-avatar';

const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className="profile">
        <IconMenu />
        <IconAvatar />
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
