import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import SignIn from "./pages/Auth/signIn";
import SignUp from "./pages/Auth/signUp";
import ErrorPagina from "./pages/404";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<App />} />
        <Route path="*" element={<ErrorPagina />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
