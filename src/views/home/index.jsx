import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import RoomItem from '../../components/room-item';
import RoomList from '../../components/room-list';
import SectionHeader from '../../components/section-header';
import { fetchHomeGoodPriceInfo } from '../../store/modules/home';
import Banner from './c-cpns/banner';
import { HomeWrapper } from './style';

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeGoodPriceInfo());
  }, [dispatch]);

  const { homeGoodPriceInfo } = useSelector(
    (state) => ({
      homeGoodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <SectionHeader title={homeGoodPriceInfo.title}></SectionHeader>
        <RoomList roomList={homeGoodPriceInfo.list}></RoomList>
      </div>
    </HomeWrapper>
  );
});

export default Home;
