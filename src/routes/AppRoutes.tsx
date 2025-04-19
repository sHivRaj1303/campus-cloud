import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Navbar from "../components/Navbar";
import LearningPage from "../pages/LearningPage";
import Login from "../auth/Login";
import TeacherDashboard from "../pages/TeacherDashboard";


const AppRoutes = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/"];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/learning/:subjectName" element={<LearningPage />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
