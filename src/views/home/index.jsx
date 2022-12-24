import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchHomeInfo } from '../../store/modules/home';
import Banner from './c-cpns/banner';
import Section from './c-cpns/section';
import { HomeWrapper } from './style';

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeInfo());
  }, [dispatch]);

  const { homeGoodPriceInfo, homeHighScoreInfo } = useSelector(
    (state) => ({
      homeGoodPriceInfo: state.home.goodPriceInfo,
      homeHighScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <Section sectionData={homeGoodPriceInfo} />
        <Section sectionData={homeHighScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
