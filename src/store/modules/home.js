import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHomeGoodPriceInfo, getHomeHighScoreInfo } from '@/network';

export const fetchHomeInfo = createAsyncThunk(
  'fetchHomeInfo',
  (payload, { dispatch }) => {
    getHomeGoodPriceInfo().then((res) => {
      dispatch(changeGoodPriceInfo(res));
    });
    getHomeHighScoreInfo().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {
    // [fetchHomeGoodPriceInfo.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const { changeGoodPriceInfo, changeHighScoreInfo } = homeSlice.actions;
export default homeSlice.reducer;
