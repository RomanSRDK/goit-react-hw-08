import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (values, ThunkAPI) => {
    try {
      const { data } = await axios.post("users/signup", values);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (values, ThunkAPI) => {
    try {
      const { data } = await axios.post("users/login", values);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {});

export const refreshUser = createAsyncThunk("auth/refresh", async () => {});
