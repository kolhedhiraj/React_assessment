import api from "../api/axios";

/* =========================================================
   1. COMPANY VERIFY
   Endpoint: POST /verify-by-company-name-and-password
========================================================= */
export const verifyCompany = async (data) => {
  // CORRECTED: Swapped from .put to .post
  const response = await api.post("/verify-by-company-name-and-password", data);
  return response.data;
};

/* =========================================================
   2. SAVE USER DETAILS + SEND OTP
   Endpoint: POST /save-user-details-and-send-otp
========================================================= */
export const saveUserDetails = async (payload) => {
  console.log("saveUserDetails payload dispatching:", payload);
  // CORRECTED: Swapped from .put to .post
  const response = await api.post("/save-user-details-and-send-otp", payload);
  return response.data;
};

/* =========================================================
   3. VERIFY OTP
   Endpoint: POST /verify-otp-for-user-registration
========================================================= */
export const verifyOTP = async (payload) => {
  // CORRECTED: Swapped from .put to .post
  const response = await api.post("/verify-otp-for-user-registration", payload);
  return response.data;
};

/* =========================================================
   4. SEND / RESEND OTP
   Endpoint: POST /send-otp-for-user-registration
========================================================= */
export const resendOTP = async (payload) => {
  // CORRECTED: Swapped from .put to .post
  const response = await api.post("/send-otp-for-user-registration", payload);
  return response.data;
};

/* =========================================================
   5. VIEW WELLNESS INTEREST
   Endpoint: GET /viewWellnessInterest
========================================================= */
export const getInterests = async () => {
  const response = await api.get("/viewWellnessInterest", {
    headers: {
      Accept: "application/json",
      Origin: "https://staging.gcp.woliba.io",
      Referer: "https://staging.gcp.woliba.io/",
    },
  });
  return response.data;
};

/* =========================================================
   6. GET WELLBEING PILLARS
   Endpoint: GET /get-wellbeing-pillars/{language_id?}
========================================================= */
export const getPillars = async (languageId = 1) => {
  // Dynamic template string to match language localization specs
  const response = await api.get(`/get-wellbeing-pillars/${languageId}`);
  return response.data;
};

/* =========================================================
   7. COMPLETE USER REGISTRATION
   Endpoint: POST /user-registration
========================================================= */
export const registerUser = async (payload) => {
  const response = await api.post("/user-registration", payload);
  return response.data;
};