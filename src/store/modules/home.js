import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHomeGoodPriceInfo } from '@/network';

export const fetchHomeGoodPriceInfo = createAsyncThunk(
  'fetchHomeGoodPriceInfo',
  async () => {
    const data = await getHomeGoodPriceInfo();
    return data;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeGoodPriceInfo.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPriceInfo } = homeSlice.actions;
export default homeSlice.reducer;
