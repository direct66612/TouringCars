import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fe0715b2a18489b385b935.mockapi.io/api/v1/";

export const fetchAdvertAction = createAsyncThunk(
  "advert",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/advert");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
