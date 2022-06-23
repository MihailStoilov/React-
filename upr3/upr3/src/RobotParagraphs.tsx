import React, { Component } from "react";

class RobotParagraphs extends Component<any, any> {
  public render() {
    return (
      <div className="text-side">
        <div className="first paragraph">
          <p
            title="Paragraph text here. Text-align on left, 3% space from right
        border. Text is only 2 lines and ends with three dots ... because
        it too long. On hover full text is shown as a tooltip. First
        letter is bold."
          >
            Paragraph text here. Text-align on left, 3% space from right border.
            Text is only 2 lines and ends with three dots ... because it too
            long. On hover full text is shown as a tooltip. First letter is
            bold.
          </p>
        </div>
        <div className="second paragraph">
          <p>
            <em>Paragraph</em> text here. Text justified, 6% space from right
            border. Text is only 2 lines and ends with three dots ... because it
            too long. On hover full text is shown. First word is
            <em>Italic</em>.
          </p>
        </div>
        <div className="third paragraph">
          <img src="goodluck-img.jpg" alt="good-luck-img" />
          <p>
            Paragraph text here. Text align on left. 9% from right border. Image
            on left side.
          </p>
        </div>
      </div>
    );
  }
}

export default RobotParagraphs;
