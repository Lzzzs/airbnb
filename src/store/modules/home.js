import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getHomeGoodPriceInfo,
  getHomeHighScoreInfo,
  getHomeDiscountInfo,
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
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
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
  },
  extraReducers: {
    // [fetchHomeGoodPriceInfo.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const { changeGoodPriceInfo, changeHighScoreInfo, changeDiscountInfo } =
  homeSlice.actions;
export default homeSlice.reducer;
