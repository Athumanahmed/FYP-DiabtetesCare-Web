import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import Patient from "./components/Patient";
import PatientData from "./components/PatientData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient-data" element={<PatientData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
