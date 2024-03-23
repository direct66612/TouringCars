import { configureStore } from "@reduxjs/toolkit";

import { advertReducer } from "./advertSlice";
import { filterReducer } from "./filterSlice";
import { favoritesReducer } from "./favoritesSlice";
export const reducer = {
  advert: advertReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
};
export const store = configureStore({ reducer });
