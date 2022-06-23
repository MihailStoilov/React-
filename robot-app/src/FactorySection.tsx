import React, { Component } from "react";
import RobotParagraphs from "./RobotParagraphs";
import RobotSideComponent from "./RobotSideComponent";
import Robot from "./Robot";

interface RobotsProps {
  robots: Robot[];
}
class FactorySection extends Component<RobotsProps, any> {
  public render() {
    return this.props.robots.length ? (
      <section className="factory-section active">
        <div className="container">
          <div className="section-header">
            <div className="heading">
              <h2 className="secondary-heading"></h2>
              <div className="arr1"></div>
            </div>
          </div>
          <div className="content-wrapper">
            <RobotSideComponent />
            <RobotParagraphs />
          </div>
        </div>
      </section>
    ) : (
      <></>
    );
  }
}

export default FactorySection;
