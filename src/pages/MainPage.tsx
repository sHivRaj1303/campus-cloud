import React, { useState } from "react";
import LearningPage from "./LearningPage";
import Navbar from "../components/Navbar";

const MainPage = () => {
  const [openLearning, setOpenLearning] = useState(false);

  // Your subjects data
  const subjectName = "Java";
  const topics = [
    "Introduction to Java",
    "Arrays",
    "Strings",
    "Object-Oriented Programming",
  ];

  const handleDrawerToggle = () => {
    setOpenLearning(true);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar onDrawerToggle={handleDrawerToggle} />

      {/* After clicking toggle button show Learning Page */}
      {openLearning && (
        <LearningPage subjectName={subjectName} topics={topics} />
      )}
    </div>
  );
};

export default MainPage;
