import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout";
import Loader from "../components/common/Loader";

import { userDetailsSchema } from "../utils/validation";
import { saveUserDetails } from "../services/registrationService";
import { setUserDetails, setToken } from "../redux/slices/registrationSlice";

const UserDetails = () => {
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Redux company state slice properties
    const company = useSelector(
        (state) => state.registration.company
    );

    // React Hook Form
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userDetailsSchema),
        mode: "onChange",
        defaultValues: {
            compname: company?.company_name || "",
        },
    });

    // Watch fields
    const watchedValues = useWatch({ control });

    // Enable button only when fields filled
    const isFormValid =
        watchedValues?.mail &&
        watchedValues?.fname &&
        watchedValues?.lname;

    // Real API Submission Handler
    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setApiError("");

            if (!company?.company_id) {
                throw new Error("Company metadata session missing. Please verify company step again.");
            }

            // Always dispatch data locally to Redux FIRST so your mock bypass ("000000" code on the next page) still knows who you are!
            dispatch(
                setUserDetails({
                    email: data.mail,
                    fname: data.fname,
                    lname: data.lname
                })
            );

            // Map user input payload matching documentation block requirement specs
            const payload = {
                company_id: Number(company.company_id),
                mail: data.mail,
                fname: data.fname,
                lname: data.lname
            };

            // Hit Endpoint: POST /save-user-details-and-send-otp
            const response = await saveUserDetails(payload);

            if (response?.status === "success") {
                // Persist the response authentication token to execute verification on step 3
                dispatch(setToken(response?.data?.token));

                // ✅ Clean execution: Navigate only after Redux state and API token are successfully stored
                navigate("/otp");
            } else {
                throw new Error(response?.error || "Failed to process profile data configuration.");
            }
        } catch (error) {
            setApiError(error?.error || error?.message || "Something went wrong");
            
            // 🛠️ DEVELOPMENT SAFETY FALLBACK: If your API is throwing errors locally but you want to test UI flows,
            // this guarantees you still pass through to the OTP step with your data safe in Redux.
            if (process.env.NODE_ENV === "development") {
                console.warn("⚠️ API Failed, but proceeding in Dev Mode with Redux fields saved.");
                setTimeout(() => navigate("/otp"), 1000);
            }
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
                <div className="registration-card">
                    <h1 className="page-title">Registration</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* EMAIL */}
                        <div className="form-group">
                            <label htmlFor="mail" className="form-label">
                                Email
                            </label>
                            <div className="input-wrapper">
                                <input
                                    id="mail"
                                    type="email"
                                    placeholder="Email"
                                    className="form-input"
                                    {...register("mail")}
                                />
                            </div>
                            {errors.mail && (
                                <p className="error-text">{errors.mail.message}</p>
                            )}
                        </div>

                        {/* FIRST NAME */}
                        <div className="form-group">
                            <label htmlFor="fname" className="form-label">
                                First Name
                            </label>
                            <div className="input-wrapper">
                                <input
                                    id="fname"
                                    type="text"
                                    placeholder="First Name"
                                    className="form-input"
                                    {...register("fname")}
                                />
                            </div>
                            {errors.fname && (
                                <p className="error-text">{errors.fname.message}</p>
                            )}
                        </div>

                        {/* LAST NAME */}
                        <div className="form-group">
                            <label htmlFor="lname" className="form-label">
                                Last Name
                            </label>
                            <div className="input-wrapper">
                                <input
                                    id="lname"
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-input"
                                    {...register("lname")}
                                />
                            </div>
                            {errors.lname && (
                                <p className="error-text">{errors.lname.message}</p>
                            )}
                        </div>

                        {/* COMPANY NAME (READ ONLY) */}
                        <div className="form-group">
                            <label htmlFor="compname" className="form-label">
                                Company Name
                            </label>
                            <div className="input-wrapper">
                                <input
                                    id="compname"
                                    type="text"
                                    className="form-input"
                                    {...register("compname")}
                                    disabled
                                />
                            </div>
                        </div>

                        {/* ERROR BANNER ACTION */}
                        {apiError && (
                            <p className="api-error">{apiError}</p>
                        )}
                        
                        <div className="divider"></div>
                        
                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={!isFormValid || loading}
                            className={`submit-btn ${isFormValid ? "active" : ""}`}
                        >
                            {loading ? "Verifying..." : "Verify email"}
                        </button>

                    </form>
                </div>
            </AuthLayout>
        </>
    );
};

export default UserDetails;