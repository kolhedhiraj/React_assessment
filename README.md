# React Coding Challenge — User Registration Flow

This project is a multi-step user registration workflow engineered using **React.js** and **Redux** based on the provided technical guidelines and Figma blueprints for Woliba. It handles complex form validations, synchronized multi-step state machines, automated cursor management, and resilient frontend data-layer handling with smart architectural fallbacks to completely bypass cross-origin resource sharing (CORS) network walls.

### 🔗 Production Artifact Links
- **Live Hosted Application (Netlify):** [INSERT YOUR NETLIFY URL HERE]
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
├── api/          # Axios runtime configurations and interceptor setups
├── assets/       # Vector shapes, functional branding typography, logos
├── components/   
│   ├── common/   # Reusable elements (Custom Input wrappers, Steppers, Loaders)
│   └── layout/   # AuthLayout high-order presentation framing wrappers
├── hooks/        # Abstracted logic trees (useCountdown timers)
├── pages/        # Views capturing workflow Steps 1-8
│   └── styles/   # Document-scoped styling parameters
├── redux/        # Unified global store configuring registration slices
├── routes/       # Route guards, single-point definitions, deep tracking redirects
├── services/     # Pure API integration endpoints
├── styles/       # System-wide variables, layouts, and overrides
└── utils/        # Validation patterns, helper tools, structural constants
