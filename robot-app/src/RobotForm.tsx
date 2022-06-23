import React, { Component, FormEvent } from "react";
import FactorySection from "./FactorySection";
import Robot from "./Robot";

interface RobotFormProps {
  setRobot: (robot: Robot) => void;
}

class RobotForm extends Component<RobotFormProps, any> {
  private onSubmit(event: FormEvent): void {
    event.preventDefault();
    const target: any = event.target;
    const robot: Robot = new Robot(
      target.name.value,
      target.type.value,
      target.color.value,
      target.jump.checked,
      target.blink.checked,
      target.talk.checked
    );
    this.props.setRobot(robot);
    target.reset();
  }
  public render() {
    return (
      <section className="section-create-robot">
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => this.onSubmit(e)}>
          <div className="title">Create robot</div>
          <div className="option-box">
            <div className="input-name box">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                id="robot-name"
                placeholder="Name"
              />
            </div>
            <div className="select-type box">
              <label>Select type *</label>
              <select name="type" id="robot-type">
                <option defaultValue="selected"></option>
                <option value="Male">Male Robot</option>
                <option value="Female">Female Robot</option>
              </select>
            </div>
            <div className="select-color box">
              <label>Select color *</label>
              <input
                type="color"
                name="color"
                id="robot-color"
                defaultValue="#e96126"
              />
            </div>
            <div className="select-options">
              <label>Select Options</label>
              <div className="option">
                <input type="checkbox" name="jump" id="jump" />
                <label htmlFor="jump">can jump</label>
              </div>
              <div className="option">
                <input type="checkbox" name="talk" id="talk" />
                <label htmlFor="talk">can talk</label>
              </div>
              <div className="option">
                <input type="checkbox" name="blink" id="blink" />
                <label htmlFor="blink">can blink</label>
              </div>
            </div>
            <div className="write-comments box">
              <label>Robot phrase</label>
              <textarea
                name="phrase"
                id="robot-phrase"
                cols={20}
                rows={5}
                placeholder="text area"
              ></textarea>
            </div>
          </div>
          <div className="buttons">
            <button className="button" type="submit" id="create-robot">
              Create
            </button>
            <button className="button" id="show-robot">
              Show Created Robots
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default RobotForm;
