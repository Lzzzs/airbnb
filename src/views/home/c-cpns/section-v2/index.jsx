import PropTypes from 'prop-types';
import React, { memo, useState, useCallback } from 'react';
import { SectionV2Wrapper } from './style';

import SectionHeader from 'components/section-header';
import RoomList from 'components/room-list';
import SectionTabs from 'components/section-tabs';

const SectionV2 = memo((props) => {
  const { sectionData } = props;

  const [city, setCity] = useState('佛山');
  const changeTabHandle = useCallback(function (tab) {
    setCity(tab);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader
        title={sectionData.title}
        subtitle={sectionData.subtitle}
      ></SectionHeader>
      <SectionTabs
        tabs={sectionData.dest_list ? Object.keys(sectionData.dest_list) : []}
        changeCity={changeTabHandle}
      ></SectionTabs>
      <RoomList roomList={sectionData?.dest_list?.[city]}></RoomList>
    </SectionV2Wrapper>
  );
});

SectionV2.propTypes = {
  sectionData: PropTypes.object,
};

export default SectionV2;
