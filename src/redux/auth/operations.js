import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) =>
  (axios.defaults.headers.common.Authorization = value); // Эта строка устанавливает заголовок авторизации по умолчанию для всех будущих запросов через axios}

export const register = createAsyncThunk(
  "auth/register",
  async (values, ThunkAPI) => {
    try {
      const { data } = await axios.post("users/signup", values);
      setAuthHeader(`Bearer ${data.token}`);
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
      setAuthHeader(`Bearer ${data.token}`);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("users/logout");
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk("auth/refresh", async () => {});
