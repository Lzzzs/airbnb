import React, { memo, useEffect, useState } from 'react';
import { HeaderRightWrapper } from './style';

import IconGlobal from '../../../../assets/svg/icon-global';
import IconMenu from '../../../../assets/svg/icon-menu';
import IconAvatar from '../../../../assets/svg/icon-avatar';

const HeaderRight = memo(() => {
  const [isShowPanel, setShowPanel] = useState(false);

  useEffect(() => {
    function changePanel() {
      setShowPanel(false);
    }
    // 事件捕获
    window.addEventListener('click', changePanel, true);

    return () => {
      window.removeEventListener('click', changePanel, true);
    };
  }, []);

  const handlePanelShow = () => {
    setShowPanel(true);
  };

  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className="profile" onClick={handlePanelShow}>
        <IconMenu />
        <IconAvatar />

        {isShowPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
