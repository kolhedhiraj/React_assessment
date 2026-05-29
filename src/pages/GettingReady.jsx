import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import "./styles/GettingReady.scss"; // Create this file for styles
import runningIllustration from "../assets/images/running-transparent.gif"; // Add a relevant illustration
const GettingReady = () => {
  const navigate = useNavigate();

  // Automatically transition to the welcome screen after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AuthLayout>
      <div className="getting-ready-container">
        <div className="illustration-wrapper">
          {/* Running/Fitness Vector Graphic Representation */}
          <div className="running-icon">
            <img src={runningIllustration} alt="Running Illustration" />
          </div>
        </div>

        <h1 className="loading-text">
          Getting your wellness journey ready<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span>
        </h1>
      </div>
    </AuthLayout>
  );
};

export default GettingReady;