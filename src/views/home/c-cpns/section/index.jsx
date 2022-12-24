import PropTypes from 'prop-types';
import React, { memo } from 'react';

import RoomList from 'components/room-list';
import SectionHeader from 'components/section-header';
import { SectionWrapper } from './style';

const Section = memo((props) => {
  const { sectionData } = props;

  return (
    <SectionWrapper className="section">
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData?.subtitle}
      ></SectionHeader>
      <RoomList roomList={sectionData.list}></RoomList>
    </SectionWrapper>
  );
});

Section.propTypes = {
  sectionData: PropTypes.object,
};

export default Section;
