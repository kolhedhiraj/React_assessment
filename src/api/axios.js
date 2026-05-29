// src/api/axios.js

import axios from "axios";
const api = axios.create({
  baseURL: "https://dev.woliba.io/v1/",
   headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;