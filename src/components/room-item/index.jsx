import React, { memo } from 'react';
import { RoomItemWrapper } from './style';

const RoomItem = memo((props) => {
  const { itemData } = props;
  return <RoomItemWrapper>{itemData.name}</RoomItemWrapper>;
});

export default RoomItem;
