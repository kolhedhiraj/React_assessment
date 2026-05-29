import * as yup from "yup";

// 🔥 GLOBAL PASSWORD RULE (reusable)
export const passwordRule = yup
  .string()
  .required("Password is required")
  .min(8, "Minimum 8 characters required")
  .matches(/[A-Z]/, "At least 1 uppercase letter required")
  .matches(/[0-9]/, "At least 1 number required");

// 🔥 GLOBAL NAME RULE
export const nameRule = yup
  .string()
  .required("Required")
  .matches(/^[A-Za-z\s]+$/, "Only letters allowed");

// 🔥 GLOBAL EMAIL RULE
export const emailRule = yup
  .string()
  .required("Email is required")
  .email("Invalid email format");

// =========================
// STEP 1 - Company Verification
// =========================
export const companySchema = yup.object().shape({
  company_name: yup.string().required("Company name is required"),
  password: passwordRule,
});

// =========================
// STEP 2 - User Details
// =========================
export const userDetailsSchema = yup.object().shape({
  mail: emailRule,
  fname: nameRule,
  lname: nameRule,
});