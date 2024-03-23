import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertAction } from "../API/api.js";
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const advertSlice = createSlice({
  name: "advert",
  initialState: {
    advert: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchAdvertAction.fulfilled, (state, action) => {
        state.advert = action.payload;
        state.isLoading = false;
      })

      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export const advertReducer = advertSlice.reducer;
export const getAdvert = (state) => state.advert.advert;
export const getIsLoading = (state) => state.advert.isLoading;
export const getError = (state) => state.advert.error;
