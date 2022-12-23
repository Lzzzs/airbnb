import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeGoodPriceInfo } from '../../store/modules/home';
import Banner from './c-cpns/banner';

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeGoodPriceInfo());
  }, [dispatch]);

  const state = useSelector(
    (state) => ({
      homeGoodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  console.log(state);

  return (
    <div>
      <Banner />
    </div>
  );
});

export default Home;
