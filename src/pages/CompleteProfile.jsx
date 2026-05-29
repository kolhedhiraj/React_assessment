import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import AuthLayout from "../components/layout/AuthLayout";
import Loader from "../components/common/Loader";

import DatePickerCalendar from "../components/common/DatePickerCalendar.jsx";
import PassHide from "../assets/icons/passHide-icon.png";
import PassShow from "../assets/icons/passShow-icon.png";
import leftArrow from "../assets/icons/left-arrow.png";
import calendarIcon from "../assets/icons/calendar-icon.png";

import { setProfile } from "../redux/slices/registrationSlice"; 

const CompleteProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        password: "",
        confirmPassword: "",
        birthday: "", // Will store the API-ready YYYY-MM-DD string
        contact: "",
        agree: false,
    });

    // We add a separate local state to handle the reader-friendly presentation text
    const [displayBirthday, setDisplayBirthday] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const isFormValid =
        form.password.trim() !== "" &&
        form.confirmPassword.trim() !== "" &&
        form.password === form.confirmPassword &&
        form.birthday.trim() !== "" &&
        /^[0-9]{10}$/.test(form.contact) &&
        form.agree;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedValue = type === "checkbox" ? checked : value;

        setForm((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));

        if (name === "confirmPassword") {
            if (form.password && value !== form.password) {
                setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
            } else {
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }
        }

        if (name === "password") {
            let passwordError = "";
            if (value.length < 8) passwordError = "Minimum 8 characters required";
            else if (!/[A-Z]/.test(value)) passwordError = "At least one uppercase letter required";
            else if (!/[0-9]/.test(value)) passwordError = "At least one number required";
            else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(value)) passwordError = "At least one special character required";

            setErrors((prev) => ({ ...prev, password: passwordError }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.password.trim()) newErrors.password = "Password is required";
        else if (form.password.length < 8) newErrors.password = "Minimum 8 characters required";
        else if (!/[A-Z]/.test(form.password)) newErrors.password = "At least one uppercase letter required";
        else if (!/[0-9]/.test(form.password)) newErrors.password = "At least one number required";
        else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(form.password)) newErrors.password = "At least one special character required";

        if (!form.confirmPassword.trim()) newErrors.confirmPassword = "Confirm password is required";
        else if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        if (!form.birthday) newErrors.birthday = "Birthday is required";

        if (!form.contact.trim()) newErrors.contact = "Contact number is required";
        else if (!/^[0-9]{10}$/.test(form.contact)) newErrors.contact = "Enter valid 10 digit number";

        if (!form.agree) newErrors.agree = "Please accept Terms & Conditions";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        dispatch(
            setProfile({
                password: form.password,
                birthday: form.birthday, // Enforces the valid YYYY-MM-DD string downstream
                phone_number: form.contact,
            })
        );

        navigate("/interests");
    };

    const handleDateSelect = ({ day, month, year }) => {
        // Safe Conversion Table to map alphabetic months back to structural integers
        const monthMap = {
            January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
            July: "07", August: "08", September: "09", October: "10", November: "11", December: "12"
        };
        
        const cleanDay = String(day).padStart(2, "0");
        const cleanMonth = monthMap[month] || "01";
        
        // 1. Structural String for Backend API Compliance
        const apiFormattedDate = `${year}-${cleanMonth}-${cleanDay}`; 
        
        // 2. Clear Visual String for Frontend Layout Readers
        const UIFormattedDate = `${month} ${day}, ${year}`;

        setForm((prev) => ({ ...prev, birthday: apiFormattedDate }));
        setDisplayBirthday(UIFormattedDate);
        setErrors((prev) => ({ ...prev, birthday: "" }));
        setShowCalendar(false); // Close modal on choose
    };

    return (
        <>
            <div className={`apple-loader-overlay ${loading ? "show-loader" : "hide-loader"}`}>
                <div className="apple-loader-wrapper"><Loader /></div>
            </div>

            <AuthLayout>
                <div className="profile-wrapper">
                    <div className="profile-card">
                        <h1 className="page-title">Login Credentials</h1>

                        {/* PASSWORD */}
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-input"
                                    name="password"
                                    placeholder="Enter password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                <span className="icon password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                    <img src={showPassword ? PassHide : PassShow} alt="toggle" className="password-icon" />
                                </span>
                            </div>
                            {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div className="form-group">
                            <label className="form-label">Confirm password</label>
                            <div className="input-wrapper">
                                <input
                                    className="form-input"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Enter password"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                />
                                <span className="icon password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    <img src={showConfirmPassword ? PassHide : PassShow} alt="toggle" className="password-icon" />
                                </span>
                            </div>
                            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                        </div>

                        {/* BIRTHDAY */}
                        <div className="form-group">
                            <label className="form-label">Birthday</label>
                            <div className="input-wrapper" onClick={() => setShowCalendar(true)} style={{ cursor: "pointer" }}>
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder="Select birthday"
                                    value={displayBirthday} // Displays readable text
                                    readOnly
                                />
                                <span className="icon">
                                    <img src={calendarIcon} alt="calendar toggle" className="calendar-icon" />
                                </span>
                            </div>
                            {errors.birthday && <p className="error-text">{errors.birthday}</p>}
                        </div>

                        {/* CALENDAR */}
                        <div className={`calendar-transition-wrapper ${showCalendar ? "calendar-open" : "calendar-close"}`}>
                            <DatePickerCalendar onSelect={handleDateSelect} onClose={() => setShowCalendar(false)} />
                        </div>

                        {/* CONTACT */}
                        <div className="form-group">
                            <label className="form-label">Contact number</label>
                            <div className="input-wrapper">
                                <input
                                    className="form-input"
                                    type="tel"
                                    name="contact"
                                    placeholder="Enter contact number"
                                    value={form.contact}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 10) {
                                            setForm((prev) => ({ ...prev, contact: value }));
                                            if (value.length > 0 && value.length < 10) {
                                                setErrors((prev) => ({ ...prev, contact: "Enter valid 10 digit number" }));
                                            } else {
                                                setErrors((prev) => ({ ...prev, contact: "" }));
                                            }
                                        }
                                    }}
                                />
                            </div>
                            {errors.contact && <p className="error-text">{errors.contact}</p>}
                        </div>

                        {/* TERMS */}
                        <div className="checkbox-row">
                            <input type="checkbox" className="rounded-radio" name="agree" checked={form.agree} onChange={handleChange} />
                            <p className="user-agree">
                                I agree to <span className="terms-services">Terms of Service </span>
                                and <span className="terms-services">Privacy Policy</span>
                            </p>
                        </div>
                        {errors.agree && <p className="error-text">{errors.agree}</p>}

                        <div className="divider"></div>

                        {/* BUTTONS */}
                        <div className="button-row">
                            <button className="back-btn" onClick={() => navigate(-1)}>
                                <span><img src={leftArrow} alt="back icon" className="arrow-icon-left" /></span>
                                Back
                            </button>
                            <button className={`next-btn ${!isFormValid ? "disabled-btn" : ""}`} disabled={!isFormValid} onClick={handleSubmit}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default CompleteProfile;