import React, { memo, useEffect, useRef, useState } from 'react';
import { ScrollViewWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo((props) => {
  const scrollRef = useRef();
  const currentIndex = useRef(0);
  const instance = useRef();
  const [isShowRight, setRight] = useState(false);
  const [isShowLeft, setLeft] = useState(false);

  useEffect(() => {
    instance.current =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    const currentLeft =
      scrollRef.current.children[currentIndex.current].offsetLeft;

    setRight(instance.current > currentLeft);
  }, [props.children]);

  function handleMove(direction) {
    currentIndex.current =
      direction === 'left'
        ? currentIndex.current - 1
        : currentIndex.current + 1;

    // 计算移动距离
    const currentLeft =
      scrollRef.current.children[currentIndex.current].offsetLeft;
    scrollRef.current.style.transform = `translate(-${currentLeft}px)`;

    setRight(instance.current > currentLeft);
    setLeft(currentLeft !== 0);
  }

  return (
    <ScrollViewWrapper>
      {isShowLeft && (
        <div className="control left" onClick={() => handleMove('left')}>
          <IconArrowLeft />
        </div>
      )}
      {isShowRight && (
        <div className="control right" onClick={() => handleMove('right')}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
