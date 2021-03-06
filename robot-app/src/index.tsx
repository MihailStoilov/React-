import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RobotForm from "./RobotForm";
import FactorySection from "./FactorySection";
import RobotApp from "./RobotApp";
import Header from "./Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Header />
    <RobotApp />
  </div>
);
