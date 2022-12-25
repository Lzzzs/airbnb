import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getHomeGoodPriceInfo,
  getHomeHighScoreInfo,
  getHomeDiscountInfo,
  getHomeHotreCommendInfo,
  getHomeLongForInfo,
  getHomePlusInfo,
} from '@/network';

export const fetchHomeInfo = createAsyncThunk(
  'fetchHomeInfo',
  (payload, { dispatch }) => {
    getHomeGoodPriceInfo().then((res) => {
      dispatch(changeGoodPriceInfo(res));
    });
    getHomeHighScoreInfo().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
    getHomeDiscountInfo().then((res) => {
      dispatch(changeDiscountInfo(res));
    });
    getHomeHotreCommendInfo().then((res) => {
      dispatch(changeHotreCommendInfo(res));
    });
    getHomeLongForInfo().then((res) => {
      dispatch(changeLongForInfo(res));
    });
    getHomePlusInfo().then((res) => {
      dispatch(changePlusInfo(res));
    });
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotreCommendInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotreCommendInfo(state, { payload }) {
      state.hotreCommendInfo = payload;
    },
    changeLongForInfo(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeHotreCommendInfo,
  changeLongForInfo,
  changePlusInfo,
} = homeSlice.actions;
export default homeSlice.reducer;
