import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchHomeInfo } from '../../store/modules/home';
import Banner from './c-cpns/banner';
import SectionV1 from './c-cpns/section-v1';
import { HomeWrapper } from './style';
import SectionV2 from './c-cpns/section-v2';
import LongFor from './c-cpns/long-for';
import { isEmptyObject } from '../../utils';
import Plus from './c-cpns/plus';

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeInfo());
  }, [dispatch]);

  const {
    homeGoodPriceInfo,
    homeHighScoreInfo,
    homeDiscountInfo,
    homeHotreCommendInfo,
    homeLongForInfo,
    homePlusInfo,
  } = useSelector(
    (state) => ({
      homeGoodPriceInfo: state.home.goodPriceInfo,
      homeHighScoreInfo: state.home.highScoreInfo,
      homeDiscountInfo: state.home.discountInfo,
      homeHotreCommendInfo: state.home.hotreCommendInfo,
      homeLongForInfo: state.home.longForInfo,
      homePlusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        {isEmptyObject(homeDiscountInfo) && (
          <SectionV2 sectionData={homeDiscountInfo} />
        )}
        {isEmptyObject(homeHotreCommendInfo) && (
          <SectionV2 sectionData={homeHotreCommendInfo} />
        )}

        {isEmptyObject(homeLongForInfo) && (
          <LongFor infoData={homeLongForInfo} />
        )}

        {isEmptyObject(homeGoodPriceInfo) && (
          <SectionV1 sectionData={homeGoodPriceInfo} />
        )}
        {isEmptyObject(homeHighScoreInfo) && (
          <SectionV1 sectionData={homeHighScoreInfo} />
        )}

        {isEmptyObject(homePlusInfo) && <Plus infoData={homePlusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
