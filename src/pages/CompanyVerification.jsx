import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import PassHide from "../assets/icons/passHide-icon.png";
import PassShow from "../assets/icons/passShow-icon.png";

import AuthLayout from "../components/layout/AuthLayout";
import Loader from "../components/common/Loader";

import { companySchema } from "../utils/validation";
import { verifyCompany } from "../services/registrationService";
import { setCompany } from "../redux/slices/registrationSlice";

import "./styles/CompanyVerification.scss";

const CompanyVerification = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(companySchema),
        mode: "onChange",
    });

    const isButtonEnabled = isValid;

    const onSubmit = async (data) => {
       navigate("/user-details");
        try {
            setLoading(true);
            setApiError("");

            // Hit the server via your freshly updated registration service layer
            const response = await verifyCompany(data);
            
            // Extract the first company match from the success response array data
            const company = response?.data?.[0];

            if (!company) {
                throw new Error("No company found matching these credentials.");
            }

            // Sync structural response information down to Redux
            dispatch(
                setCompany({
                    company_id: company.id,
                    company_name: company.company_name,
                })
            );

            // Dynamic browser routing progression path
            // navigate("/user-details");
        } catch (error) {
            // Handle both structured API response error payloads and generic system execution faults
            setApiError(error?.error || error?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={`apple-loader-overlay ${loading ? "show-loader" : "hide-loader"}`}>
                <div className="apple-loader-wrapper">
                    <Loader />
                </div>
            </div>

            <AuthLayout>
                <div className="glass-page">
                    {/* Background Blur Orbs */}
                    <div className="bg-orb orb-1"></div>
                    <div className="bg-orb orb-2"></div>
                    <div className="bg-orb orb-3"></div>

                    <div className="registration-card glass-card">
                        <div className="glass-shine"></div>

                        <h1 className="page-title">Welcome Back</h1>
                        <p className="page-subtitle">Verify your company credentials</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
                            {/* Company Name */}
                            <div className="form-group">
                                <label className="form-label">Company Name</label>
                                <div className="input-wrapper glass-input-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Enter Company Name"
                                        {...register("company_name")}
                                        className={`form-input ${errors.company_name ? "input-error" : ""}`}
                                    />
                                </div>
                                {errors.company_name && (
                                    <p className="error-text">{errors.company_name.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label className="form-label">Company Password</label>
                                <div className="input-wrapper glass-input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter Company Password"
                                        {...register("password")}
                                        className={`form-input ${errors.password ? "input-error" : ""}`}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        <img
                                            src={showPassword ? PassHide : PassShow}
                                            alt="toggle"
                                            className="password-icon"
                                        />
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="error-text">{errors.password.message}</p>
                                )}
                            </div>

                            {/* API ERROR DISPLAY */}
                            {apiError && <p className="api-error">{apiError}</p>}

                            <div className="divider"></div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={loading || !isButtonEnabled}
                                className={`submit-btn ${isButtonEnabled ? "active" : ""}`}
                            >
                                {loading ? "Please wait..." : "Continue"}
                            </button>
                        </form>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default CompanyVerification;