import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchHomeInfo } from '../../store/modules/home';
import Banner from './c-cpns/banner';
import SectionV1 from './c-cpns/section-v1';
import { HomeWrapper } from './style';

import SectionV2 from './c-cpns/section-v2';

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeInfo());
  }, [dispatch]);

  const { homeGoodPriceInfo, homeHighScoreInfo, homeDiscountInfo } =
    useSelector(
      (state) => ({
        homeGoodPriceInfo: state.home.goodPriceInfo,
        homeHighScoreInfo: state.home.highScoreInfo,
        homeDiscountInfo: state.home.discountInfo,
      }),
      shallowEqual
    );

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <SectionV2 sectionData={homeDiscountInfo} />

        <SectionV1 sectionData={homeGoodPriceInfo} />
        <SectionV1 sectionData={homeHighScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
