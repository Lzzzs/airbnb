import React, { memo } from 'react';
import SectionHeader from 'components/section-header';
import PropTypes from 'prop-types';
import { PlusWrapper } from './style';
import ScrollView from 'components/scroll-view';
import RoomItem from 'components/room-item';

const Plus = memo((props) => {
  const { infoData } = props;

  return (
    <PlusWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="content">
        <ScrollView>
          {infoData.list.map((item, index) => {
            return (
              <RoomItem itemData={item} width="20%" key={index}></RoomItem>
            );
          })}
        </ScrollView>
      </div>
    </PlusWrapper>
  );
});

Plus.propTypes = {
  infoData: PropTypes.object,
};

export default Plus;
