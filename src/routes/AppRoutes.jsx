import { Routes, Route } from "react-router-dom";

import CompanyVerification from "../pages/CompanyVerification";
import UserDetails from "../pages/UserDetails";
import OtpVerification from "../pages/OTPVerification";
import CompleteProfile from "../pages/CompleteProfile.jsx";
import Interests from "../pages/Interests";
import WellbeingPillars from "../pages/WellbeingPillars";
import GettingReady from "../pages/GettingReady"; // New Transition Step
import WelcomeUser from "../pages/WelcomeUser";   // New Success Layout Step

const AppRoutes = () => {
  return (
    <Routes>
      {/* Step 1: Corporate Gatekeeping & Credentials Check */}
      <Route path="/" element={<CompanyVerification />} />

      {/* Step 2: Account Identity Form Mapping */}
      <Route path="/user-details" element={<UserDetails />} />

      {/* Step 3: Secure Handshake OTP Input */}
      <Route path="/otp" element={<OtpVerification />} />

      {/* Step 4: Password Creation & Birthday Selection */}
      <Route path="/profile" element={<CompleteProfile />} />

      {/* Step 5: Wellness Interest Tag Dictionary Mapping */}
      <Route path="/interests" element={<Interests />} />

      {/* Step 6: Final 3 Core Wellbeing Pillars Selection */}
      <Route path="/pillars" element={<WellbeingPillars />} />

      {/* Step 7: "Getting your wellness journey ready..." Transition Loader */}
      <Route path="/getting-ready" element={<GettingReady />} />

      {/* Step 8: Final Dashboard Splash Welcome Onboarding Screen */}
      <Route path="/welcome" element={<WelcomeUser />} />
    </Routes>
  );
};

export default AppRoutes;
