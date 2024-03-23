import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
    },
    deleteFavorite: {
      reducer: (state, action) => {
        return state.filter((el) => el.id !== action.payload);
      },
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const getFavorites = (state) => state.favorites;
export const favoritesReducer = favoritesSlice.reducer;
