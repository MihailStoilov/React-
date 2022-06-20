import React, { Component } from "react";
import RobotParagraphs from "./RobotParagraphs";
import RobotSideComponent from "./RobotSideComponent";

class FactorySection extends Component<any, any> {
  public render() {
    return (
      <section className="factory-section active">
        <div className="container">
          <div className="section-header">
            <div className="heading">
              <h2 className="secondary-heading">Basic Robot</h2>
              <div className="arr1"></div>
            </div>
          </div>
          <div className="content-wrapper">
            <RobotSideComponent />
            <RobotParagraphs />
          </div>
        </div>
      </section>
    );
  }
}

export default FactorySection;
