import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { RoomListWrapper } from '../room-list/style';
import RoomItem from '../room-item';

const RoomList = memo((props) => {
  let width = '25%';
  const { roomList } = props;

  if (roomList?.length === 6) {
    width = '33.33%';
  }

  return (
    <RoomListWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return (
          <RoomItem itemData={item} key={item.id} width={width}></RoomItem>
        );
      })}
    </RoomListWrapper>
  );
});

RoomList.propTypes = {
  roomList: PropTypes.array,
};

export default RoomList;
