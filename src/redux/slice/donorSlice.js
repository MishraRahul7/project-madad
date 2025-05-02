// slice/donorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const donorSlice = createSlice({
  name: 'donor',
  initialState: {
    loading: false,
    success: false,
    error: null
  },
  reducers: {
    registerDonorRequest: state => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    registerDonorSuccess: state => {
      state.loading = false;
      state.success = true;
    },
    registerDonorFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  registerDonorRequest,
  registerDonorSuccess,
  registerDonorFailure
} = donorSlice.actions;

export default donorSlice.reducer;
