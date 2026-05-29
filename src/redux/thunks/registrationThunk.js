import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  verifyCompany,
  saveUserDetails,
  verifyOTP,
  registerUser,
} from "../../services/registrationService";

export const verifyCompanyThunk =
  createAsyncThunk(
    "registration/verifyCompany",
    async (payload, thunkAPI) => {
      try {
        return await verifyCompany(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(
        error?.response?.data ||
            error.message
        );
      }
    }
  );

export const saveUserThunk =
  createAsyncThunk(
    "registration/saveUser",
    async (payload, thunkAPI) => {
      try {
        return await saveUserDetails(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response.data
        );
      }
    }
  );

export const verifyOTPThunk =
  createAsyncThunk(
    "registration/verifyOTP",
    async (payload, thunkAPI) => {
      try {
        return await verifyOTP(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response.data
        );
      }
    }
  );

export const registerUserThunk =
  createAsyncThunk(
    "registration/registerUser",
    async (payload, thunkAPI) => {
      try {
        return await registerUser(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response.data
        );
      }
    }
  );