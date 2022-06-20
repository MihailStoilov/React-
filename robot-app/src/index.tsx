import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RobotForm from "./RobotForm";
import FactorySection from "./FactorySection";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <header className="header">
      <h1>robot factory</h1>
      <a href="https://www.playtech.com/" target="_blank">
        <img src="logoplaytech.JPG" alt="logo playtech" />
      </a>
    </header>
    <FactorySection />
    <RobotForm />
  </div>
);
