import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { RoomListWrapper } from '../room-list/style';
import RoomItem from '../room-item';

const RoomList = memo((props) => {
  const { roomList } = props;
  return (
    <RoomListWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id}></RoomItem>;
      })}
    </RoomListWrapper>
  );
});

RoomList.propTypes = {
  roomList: PropTypes.array,
};

export default RoomList;
