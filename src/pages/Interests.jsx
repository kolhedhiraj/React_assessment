import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Properly tracking actions
import AuthLayout from "../components/layout/AuthLayout";
import Loader from "../components/common/Loader";

import { setInterests } from "../redux/slices/registrationSlice"; // Syncs choices globally

// ICONS
import aerobicsIcon from "../assets/icons/Aerobics.png";
import gymnasticsIcon from "../assets/icons/Gymnastics.png";
import calisthenics from "../assets/icons/Calisthenics.png";
import ballet from "../assets/icons/Ballet.png";
import dance from "../assets/icons/Dance.png";
import hiking from "../assets/icons/Hiking.png";
import obstacle_racing from "../assets/icons/Obstacle-Racing.png";
import pilates from "../assets/icons/Pilates.png";
import running from "../assets/icons/Running.png";
import walking from "../assets/icons/Walking.png";
import yoga from "../assets/icons/Yoga.png";
import leftArrow from "../assets/icons/left-arrow.png";

const Interests = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [openAccordion, setOpenAccordion] = useState("Individual Sports");

    const [selectedInterests, setSelectedInterests] = useState([
        "Aerobics",
        "Calisthenics",
        "Obstacle Racing",
    ]);

    const categories = [
        {
            title: "Individual Sports",
            interests: [
                { name: "Aerobics", icon: aerobicsIcon },
                { name: "Ballet", icon: ballet },
                { name: "Calisthenics", icon: calisthenics },
                { name: "Dance", icon: dance },
                { name: "Gymnastics", icon: gymnasticsIcon },
                { name: "Hiking", icon: hiking },
                { name: "Obstacle Racing", icon: obstacle_racing },
                { name: "Pilates", icon: pilates },
                { name: "Running", icon: running },
                { name: "Walking", icon: walking },
                { name: "Yoga", icon: yoga },
            ],
        },
        {
            title: "Ball Sports",
            interests: [
                { name: "Football" }, { name: "Basketball" }, { name: "Cricket" }, { name: "Tennis" }, { name: "Volleyball" }
            ],
        },
        {
            title: "Wheel Sports",
            interests: [
                { name: "Cycling" }, { name: "Skating" }, { name: "BMX" }, { name: "Scootering" }
            ],
        },
        {
            title: "Combat Sports",
            interests: [
                { name: "Boxing" }, { name: "Karate" }, { name: "Judo" }, { name: "Wrestling" }
            ],
        },
        {
            title: "Resistance Training",
            interests: [
                { name: "Bodybuilding" }, { name: "Crossfit" }, { name: "Powerlifting" }
            ],
        },
        {
            title: "Winter Sports",
            interests: [
                { name: "Skiing" }, { name: "Snowboarding" }, { name: "Ice Hockey" }
            ],
        },
        {
            title: "Water Sports",
            interests: [
                { name: "Swimming" }, { name: "Surfing" }, { name: "Rowing" }
            ],
        },
        {
            title: "Other Sports",
            interests: [
                { name: "Chess" }, { name: "Esports" }, { name: "Archery" }
            ],
        },
    ];

    const toggleAccordion = (title) => {
        setOpenAccordion(openAccordion === title ? "" : title);
    };

    const toggleInterest = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter((item) => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const handleSubmit = () => {
        if (selectedInterests.length === 0) return;

        setLoading(true);

        // Dispatches selection lists down to your redux slice workspace
        dispatch(setInterests(selectedInterests));

        setTimeout(() => {
            setLoading(false);
            navigate("/pillars"); 
        }, 1500);
    };

    return (
        <>
            <div className={`apple-loader-overlay ${loading ? "show-loader" : "hide-loader"}`}>
                <div className="apple-loader-wrapper"><Loader /></div>
            </div>

            <AuthLayout>
                <div className="interests-page">
                    <div className="interests-card">
                        <h1 className="page-title">Select all wellness interests that apply — at least one is required.</h1>

                        <div className="accordion-wrapper">
                            {categories.map((category) => {
                                const isOpen = openAccordion === category.title;

                                return (
                                    <div className="accordion-item" key={category.title}>
                                        <div className="accordion-header" onClick={() => toggleAccordion(category.title)}>
                                            <span>{category.title}</span>
                                            <div className={`accordion-arrow ${isOpen ? "open" : ""}`}>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.1582 4.5L2.84159 4.5C2.65909 4.50076 2.48092 4.55563 2.3296 4.65765C2.17828 4.75968 2.06061 4.90428 1.99147 5.07318C1.92233 5.24208 1.90482 5.42768 1.94117 5.60653C1.97751 5.78538 2.06607 5.94943 2.19565 6.07795L7.34474 11.227C7.43053 11.3135 7.53259 11.3822 7.64504 11.429C7.75749 11.4759 7.8781 11.5 7.99992 11.5C8.12173 11.5 8.24235 11.4759 8.35479 11.429C8.46724 11.3822 8.5693 11.3135 8.65509 11.227L13.8042 6.07795C13.9338 5.94943 14.0223 5.78538 14.0587 5.60653C14.095 5.42768 14.0775 5.24208 14.0084 5.07318C13.9392 4.90428 13.8216 4.75968 13.6702 4.65765C13.5189 4.55563 13.3407 4.50076 13.1582 4.5Z" fill="#DA6C74" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                                            <div className="accordion-body">
                                                {category.interests.map((interestItem) => {
                                                    const active = selectedInterests.includes(interestItem.name);

                                                    return (
                                                        <button key={interestItem.name} className={`interest-pill ${active ? "active" : ""}`} onClick={() => toggleInterest(interestItem.name)}>
                                                            {interestItem.icon && <img src={interestItem.icon} alt={interestItem.name} className="interest-icon" />}
                                                            <span>{interestItem.name}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* FOOTER */}
                        <div className="footer-buttons">
                            <button className="back-btn" onClick={() => navigate(-1)}>
                                <span><img src={leftArrow} alt="back icon" className="arrow-icon-left" /></span>
                                Back
                            </button>
                            <button className={`next-btn ${selectedInterests.length > 0 ? "enabled" : ""}`} disabled={selectedInterests.length === 0} onClick={handleSubmit}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default Interests;