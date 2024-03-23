import { configureStore } from "@reduxjs/toolkit";

import { advertReducer } from "./advertSlice";
import { filterReducer } from "./filterSlice";
export const reducer = {
  advert: advertReducer,
  filter: filterReducer,
};
export const store = configureStore({ reducer });
