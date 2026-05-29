import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: null,
  token: "",
  otpVerified: false,

  userDetails: {
    email: "",
    fname: "",
    lname: "",
  },

  profile: {
    password: "",
    birthday: "",
    phone_number: "",
    work_anniversary: "",
  },

  interests: [],
  pillars: [],

  loading: false,
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,

  reducers: {
    setCompany(state, action) {
      state.company = action.payload;
    },

    setToken(state, action) {
      state.token = action.payload;
    },

    setOTPVerified(state, action) {
      state.otpVerified = action.payload;
    },

    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },

    setProfile(state, action) {
      state.profile = action.payload;
    },

    setInterests(state, action) {
      state.interests = action.payload;
    },

    setPillars(state, action) {
      state.pillars = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },

    resetRegistration() {
      return initialState;
    },
  },
});

export const {
  setCompany,
  setToken,
  setOTPVerified,
  setUserDetails,
  setProfile,
  setInterests,
  setPillars,
  setLoading,
  setError,
  resetRegistration,
} = registrationSlice.actions;

export default registrationSlice.reducer;