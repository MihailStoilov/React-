import React, { Component } from "react";
import Robot from "./Classes/Robot";
import RobotParagraphs from "./RobotParagraphs";

interface RobotListProps {
  robots: Robot[];
}

class RobotList extends Component<RobotListProps, any> {
  public render() {
    return (
      <>
        {this.props.robots.map((robot: Robot) => (
          <section className="factory-section active">
            <div className="container">
              <div className="section-header">
                <div className="heading">
                  <h2 className="secondary-heading">{robot.type} Robot</h2>
                  <div className="arr1"></div>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="robot-side">
                  <div className="robot">
                    <div className="head">
                      <div className="eyes">
                        <div
                          className={"eye " + (robot.blink ? "blink" : "")}
                        ></div>
                        <div className="eye"></div>
                      </div>
                      <div className="mouth"></div>
                    </div>
                    <div className="robot-body">
                      <div
                        className="chest"
                        style={{ borderTop: "5vw solid " + robot.color }}
                      ></div>
                      <div className="right-hand"></div>
                      <div className="left-hand"></div>
                    </div>
                    {robot.type === "Female" ? (
                      <div
                        className="skirt"
                        style={{ borderBottom: "2.5vw solid " + robot.color }}
                      ></div>
                    ) : (
                      <></>
                    )}
                    <div className="legs">
                      <div
                        className={"left-leg leg " + (robot.jump ? "jump" : "")}
                      ></div>
                      <div
                        className={
                          "right-leg leg " + (robot.jump ? "jump" : "")
                        }
                      ></div>
                    </div>
                  </div>
                  <p className="robot-name">{robot.name}</p>
                </div>
                <RobotParagraphs />
              </div>
            </div>
          </section>
        ))}
      </>
    );
  }
}

export default RobotList;
