# React Coding Challenge — User Registration Flow

This project is a multi-step user registration workflow engineered using **React.js** and **Redux** based on the provided technical guidelines and Figma blueprints for Woliba. It handles complex form validations, synchronized multi-step state machines, automated cursor management, and resilient frontend data-layer handling with smart architectural fallbacks to completely bypass cross-origin resource sharing (CORS) network walls.

### 🔗 Production Artifact Links
- **Live Hosted Application (Netlify):** https://user-registration-flow.netlify.app/
- **Public GitHub Repository:** https://github.com/kolhedhiraj/React_assessment

---

## 📖 Application Architecture & Overview

The system transitions the user dynamically through a secure, structured 8-stage sequence:

1. **Step 1 — Company Verification:** Validates company-level configurations against target runtime patterns.
2. **Step 2 — Personal Metadata Profiles:** Pre-fills company values and applies validation rules against first/last names (prohibiting special characters/numbers).
3. **Step 3 — OTP Gating Sequence:** Provides continuous cell auto-focus management, explicit backspace tracking, and reverse synchronization timers.
4. **Step 4 — Credentials Configuration:** Validates multi-tier password configurations, custom interactive calendars (`DatePickerCalendar`), and terms acceptance checkboxes.
5. **Step 5 — Interests Multi-Selection Matrix:** Dynamic user interest profiling cards.
6. **Step 6 — Wellbeing Pillar Limits:** Validates that exactly 3 pillars are selected, showing numerical indicators of selection order.
7. **Step 7 — Registration Completion:** Intercepts payload states, generates unified payloads, and manages processing screens.
8. **Step 8 — Polish Welcome Screen:** Dynamic name greeting rendering and conditional body class injects to cleanly re-scope background layout configurations.

---

## 💻 Tech Stack & Ecosystem Dependencies

- **Core Layer:** React 18+ (Functional Components with Hooks only, strictly JavaScript)
- **State Orchestration Store:** Redux (Slice architectures for authentication, profile steps, and interest indices)
- **Data Mutation Validation:** React Hook Form + @hookform/resolvers via Yup Object Schema Resolvers
- **Routing Engine:** React Router DOM (Declarative client-side SPAs)
- **Animation Framework:** Framer Motion (Shake animations for errors, loading overlays)
- **Styling Architecture:** Tailwind CSS + Syntactically Awesome Style Sheets (SCSS) via class scopes

---

## 🗂️ Repository Directory Hierarchy

```text
src/
├── api/                  # Axios core layer instances & runtime interceptor setups
│   └── axios.js          
├── app/                  # Main centralized Redux configuration engine
│   └── store.js          
├── assets/               # Layout vectors, corporate typography, & iconography
│   ├── icons/            # Activity, navigation arrows, and visibility toggle vectors
│   ├── images/           # Layout assets, page backgrounds, and dynamic screen loaders
│   └── logos/            # Corporate branding imagery (Woliba Logo)
├── components/           
│   ├── common/           # Atomic reusable UI components (Inputs, Custom Calendars, Buttons)
│   │   └── style/        # Individual stylistic overrides (loader styling hooks)
│   └── layout/           # High-order framing wrappers (AuthLayout)
├── hooks/                # Abstracted logic patterns (useCountdown timer handlers)
├── pages/                # Distinct, decoupled functional view layers (Steps 1 - 8)
│   ├── styles/           # View-specific SCSS modular stylesheets
│   ├── CompanyVerification.jsx
│   ├── UserDetails.jsx
│   ├── OTPVerification.jsx
│   ├── CompleteProfile.jsx
│   ├── Interests.jsx
│   ├── WellbeingPillars.jsx
│   ├── GettingReady.jsx
│   └── WelcomeUser.jsx
├── redux/                # Individual state slice sheets for multi-step preservation
│   ├── slices/           # Auth, registration context data, and wellness tracking indexes
│   └── thunks/           # Asynchronous interaction actions (registrationThunk.js)
├── routes/               # Declarative app path arrays and protected access guards
│   ├── AppRoutes.jsx     
│   └── ProtectedRoute.jsx
├── services/             # Pure API service layer abstractions
│   └── registrationService.js
├── styles/               # Global styling layouts and unified variables
│   └── global.css
└── utils/                # Validation logic blocks, constant data maps, and state local storage
    ├── constants.js
    ├── validation.js
    └── helpers.js
