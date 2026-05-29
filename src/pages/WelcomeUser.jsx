import React, { useEffect } from "react"; // ✅ Added useEffect
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLayout from "../components/layout/AuthLayout";
import "./styles/WelcomeUser.scss"; 
import chantingman from "../assets/icons/chanting-man.png"; 

const WelcomeUser = () => {
  const navigate = useNavigate();

  // Safely extract the profile name string captured during the registration step loop
  const userDetails = useSelector((state) => state.registration?.userDetails);
  const userName = userDetails?.fname || "User"; 

  // ⚡ DYNAMIC BODY CLASS INJECTION
  useEffect(() => {
    // ➕ Append the specific class on page mount
    document.body.classList.add("welcome-page-active");

    // ➖ Cleanup removes the class on unmount when user navigates away
    return () => {
      document.body.classList.remove("welcome-page-active");
    };
  }, []);

  const handleGetStarted = () => {
    // navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="welcome-screen-wrapper">
        <div className="welcome-card-content">
          {/* Centered Meditation/Yoga Vector Illustration representation */}
          <div className="meditation-illustration">
            <img src={chantingman} alt="Chanting Man Illustration" />
          </div>

          {/* Correctly renders custom greeting template */}
          <h1 className="welcome-title">Welcome {userName}!</h1>

          <p className="welcome-description">
            Welcome to Woliba! You'll find wellness challenges, fitness and recipe
            videos, and daily tips to support your health goals. Download our iOS or
            Android app and start your wellbeing journey today.
          </p>

          <button
            type="button"
            onClick={handleGetStarted}
            className="get-started-btn"
          >
            Let's get Started
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default WelcomeUser;
