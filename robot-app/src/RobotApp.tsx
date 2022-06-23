import React, { Component } from "react";
import FactorySection from "./FactorySection";
import Robot from "./Robot";
import RobotForm from "./RobotForm";

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
    this.setState({ robots: [...this.state.robots, robot] });
  };

  public render() {
    console.log(this.state.robots);
    return (
      <>
        <RobotForm setRobot={this.setRobot} />
        
      </>
    );
  }
}

export default RobotApp;
