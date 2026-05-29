# React Coding Challenge — User Registration Flow

This project is a multi-step user registration workflow engineered using **React.js** and **Redux** based on the provided technical guidelines and Figma blueprints for Woliba. It handles complex form validations, synchronized multi-step state machines, automated cursor management, and resilient frontend data-layer handling with smart architectural fallbacks to completely bypass cross-origin resource sharing (CORS) network walls.

### 🔗 Production Artifact Links
- **Live Hosted Application (Netlify):** https://user-registration-flow.onrender.com/
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
```

💻 Libraries & Tools Used
Core Framework: React 18+ (Functional Components with Hooks only)

Global State Orchestration: Redux & Redux Toolkit (Store slice synchronization)

Form & Input Validation: React Hook Form + @hookform/resolvers via Yup Schema Objects

Client-Side Routing: React Router DOM (Protected routes & Single Page Architecture)

Fluid Animation Engine: Framer Motion (Error container shake effects, mounting visual shifts)

Styling Core: Tailwind CSS + SASS/SCSS (Class-scoped layout modularity)

📸 Screenshots of Each Step
Step 1: Company Verification
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 44 18 PM" src="https://github.com/user-attachments/assets/ece7a9ff-4a3e-4cec-b00f-434ac9d46963" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 44 28 PM" src="https://github.com/user-attachments/assets/8f0bbff2-2448-4273-b93f-f93fead09ba9" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 44 38 PM" src="https://github.com/user-attachments/assets/7b6395af-ec19-42cd-b83c-16ce89626ff4" />

Step 2: User Profile Details
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 44 47 PM" src="https://github.com/user-attachments/assets/95da38cd-2dd5-49a6-9101-e653968f0adc" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 44 51 PM" src="https://github.com/user-attachments/assets/67310f92-4e61-4f3b-9afc-188fb6b49f83" />

Step 3: OTP Verification
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 44 59 PM" src="https://github.com/user-attachments/assets/2c18d88d-e1ae-4a27-a0a8-d7ce5482ac5f" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 02 PM" src="https://github.com/user-attachments/assets/8a89092b-0409-4014-b527-2af8157f131e" />

Step 4: Complete Profile
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 10 PM" src="https://github.com/user-attachments/assets/6e3f318d-b858-4b47-81f6-f21af4afefd3" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 32 PM" src="https://github.com/user-attachments/assets/37c905e9-d48d-477b-b339-5a59d32fcfd8" />

Step 5: Interest Selection
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 36 PM" src="https://github.com/user-attachments/assets/9c5f0ae1-beb6-49e4-8b3d-642298e7307b" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 41 PM" src="https://github.com/user-attachments/assets/0045b1e8-260d-4da6-af32-3e914a7891e1" />

Step 6: Wellbeing Pillars
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 45 PM" src="https://github.com/user-attachments/assets/1e3c0355-3f0d-47f7-ab8a-4611c513d55f" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 48 PM" src="https://github.com/user-attachments/assets/78909c7e-52d5-4753-9bf3-a868f5aa52d4" />

Step 7: Processing / Loader
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 54 PM" src="https://github.com/user-attachments/assets/c4bcf660-fb6c-4d7e-b3aa-3cfc201be6d2" />

Step 8: Welcome Screen
<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 45 58 PM" src="https://github.com/user-attachments/assets/1e445568-cf26-4315-9975-af4f7f937ed5" />

<img width="1440" height="900" alt="Screenshot 2026-05-29 at 3 46 00 PM" src="https://github.com/user-attachments/assets/3476026f-6aaa-4eeb-8618-d659b10ec380" />

