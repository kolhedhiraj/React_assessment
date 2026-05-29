import { useState } from "react";

import usaFlag from "../../assets/icons/unites-state.png";
import spanishFlag from "../../assets/icons/Spanish.png";
import frenchFlag from "../../assets/icons/French.png";
import portugueseFlag from "../../assets/icons/Portuguese.png";

const languages = [
    {
        code: "en",
        label: "English",
        short: "En",
        flag: usaFlag,
    },
    {
        code: "es",
        label: "Spanish",
        short: "Es",
        flag: spanishFlag,
    },
    {
        code: "fr",
        label: "French",
        short: "Fr",
        flag: frenchFlag,
    },
    {
        code: "pt",
        label: "Portuguese",
        short: "Pt",
        flag: portugueseFlag,
    },
];

const LanguageSwitch = () => {

    const [selectedLanguage, setSelectedLanguage] =
        useState(languages[0]);

    const [showDropdown, setShowDropdown] =
        useState(false);

    const handleLanguageChange = (lang) => {

        setSelectedLanguage(lang);

        setShowDropdown(false);

        // REAL LANGUAGE SWITCH
        // Example:
        // i18n.changeLanguage(lang.code);

        console.log(
            "Selected Language:",
            lang.code
        );
    };

    return (
        <div className="language-switch">

            <span className="language-title">
                Language
            </span>

            {/* SELECT BOX */}
            <div
                className="lang-box"
                onClick={() =>
                    setShowDropdown(
                        !showDropdown
                    )
                }
            >

                <div className="selected-lang">

                    <img
                        src={
                            selectedLanguage.flag
                        }
                        alt={
                            selectedLanguage.label
                        }
                        className="flag-icon"
                    />

                    <span>
                        {
                            selectedLanguage.short
                        }
                    </span>

                </div>

                <span className="dropdown-arrow">
                    ▾
                </span>

            </div>

            {/* DROPDOWN */}
            {showDropdown && (
                <ul className="language-dropdown">

                    {languages.map((lang) => (

                        <li
                            key={lang.code}
                            onClick={() =>
                                handleLanguageChange(
                                    lang
                                )
                            }
                        >

                            <a>

                                <span>

                                    <div>

                                        <img
                                            src={lang.flag}
                                            alt={
                                                lang.label
                                            }
                                            loading="lazy"
                                        />

                                    </div>

                                </span>

                                {lang.label}

                            </a>

                        </li>
                    ))}

                </ul>
            )}

            {/* CSS */}
            <style>{`

                .language-switch{
                    position:relative;
                    display:flex;
                    align-items:center;
                    gap:14px;
                    font-family:sans-serif;
                }

                .language-title{
                    font-size:16px;
                    font-weight:500;
                    color:#1B4B66;
                }

                .lang-box{
                    min-width:110px;
                    height:42px;
                    border:1px solid #e3e3e3;
                    border-radius:10px;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    padding:0 14px;
                    cursor:pointer;
                    background:#fff;
                }

                .selected-lang{
                    display:flex;
                    align-items:center;
                    gap:10px;
                }

                .flag-icon{
                    width:22px;
                    height:22px;
                    border-radius:50%;
                    object-fit:cover;
                }

                .dropdown-arrow{
                    font-size:14px;
                    color:#777;
                }

                .language-dropdown{
                    position:absolute;
                    top:55px;
                    right:0;
                    width:240px;
                    background:#fff;
                    border-radius:14px;
                    box-shadow:
                        0 10px 30px rgba(0,0,0,0.12);
                    padding:10px 0;
                    z-index:999;
                    list-style:none;
                    margin:0;
                }

                .language-dropdown li{
                    width:100%;
                    cursor:pointer;
                    transition:0.2s;
                }

                .language-dropdown li:hover{
                    background:#f7f7f7;
                }

                .language-dropdown a{
                    display:flex;
                    align-items:center;
                    gap:14px;
                    padding:12px 18px;
                    text-decoration:none;
                    color:#1B4B66;
                    font-size:15px;
                    font-weight:500;
                }

                .language-dropdown img{
                    width:28px;
                    height:28px;
                    border-radius:50%;
                    object-fit:cover;
                }

            `}</style>

        </div>
    );
};

export default LanguageSwitch;