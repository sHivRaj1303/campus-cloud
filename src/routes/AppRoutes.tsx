import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Navbar from "../components/Navbar";
import LearningPage from "../pages/LearningPage";
import Login from "../auth/Login";
import TeacherDashboard from "../pages/TeacherDashboard";
import Profile from "../pages/Profile";


const AppRoutes = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/"];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/student-dashboard" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/learning/:subjectName" element={<LearningPage />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
