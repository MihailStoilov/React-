import React, { Component } from "react";
import Robot from "./Classes/Robot";
import RobotForm from "./RobotForm";
import RobotList from "./RobotList";

interface RobotAppProps {}

interface RobotAppState {
  robots: Robot[];
}

class RobotApp extends Component<RobotAppProps, RobotAppState> {
  constructor(props: RobotAppProps) {
    super(props);
    this.state = { robots: [] };
  }

  private setRobot = (robot: Robot): void => {
    this.setState({ robots: [robot] });
  };

  public render() {
    console.log(this.state.robots);
    return (
      <>
        <header className="header">
          <h1>robot factory</h1>
          <a href="https://www.playtech.com/" target="_blank">
            <img src="logoplaytech.JPG" alt="logo playtech" />
          </a>
        </header>
        <RobotList robots={this.state.robots} />
        <RobotForm setRobot={this.setRobot} />
      </>
    );
  }
}

export default RobotApp;
