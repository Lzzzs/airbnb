import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { SectionTabsWrapper } from './style';

const SectionTabs = memo((props) => {
  const { tabs, changeCity } = props;
  const [currentTab, setTab] = useState(tabs[0]);

  const tabClassName = (tab) => (tab === currentTab ? 'tab active' : 'tab');
  return (
    <SectionTabsWrapper>
      {tabs.map((tab) => {
        return (
          <div
            className={tabClassName(tab)}
            key={tab}
            onClick={() => {
              changeCity(tab);
              setTab(tab);
            }}
          >
            {tab}
          </div>
        );
      })}
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabs: PropTypes.array,
  changeCity: PropTypes.func,
};

export default SectionTabs;
