import { createSlice } from '@reduxjs/toolkit';
import { fetchGreeting } from './fetchGreeting';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: '',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => action.payload);
  },
});

export default greetingSlice.reducer;
export const { actions } = greetingSlice;
