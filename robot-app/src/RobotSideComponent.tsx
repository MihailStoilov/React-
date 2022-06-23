import React, { Component } from "react";
import Robot from "./Robot";

interface RobotsProps {
  robots: Robot[];
}

class RobotSideComponent extends Component<any, any> {
  public render() {
    return (
      <div className="robot-side">
        <div className="robot">
          <div className="head">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="robot-body">
            <div className="chest"></div>
            <div className="right-hand"></div>
            <div className="left-hand"></div>
          </div>
          <div className="legs">
            <div className="left-leg leg"></div>
            <div className="right-leg leg"></div>
          </div>
        </div>
        <p className="robot-name">{Robot.name}</p>
      </div>
    );
  }
}

export default RobotSideComponent;
