import PropTypes from 'prop-types';
import React, { memo } from 'react';

import RoomList from 'components/room-list';
import SectionHeader from 'components/section-header';
import { SectionV1Wrapper } from './style';

const Section = memo((props) => {
  const { sectionData } = props;

  return (
    <SectionV1Wrapper className="section">
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData?.subtitle}
      ></SectionHeader>
      <RoomList roomList={sectionData.list}></RoomList>
    </SectionV1Wrapper>
  );
});

Section.propTypes = {
  sectionData: PropTypes.object,
};

export default Section;
