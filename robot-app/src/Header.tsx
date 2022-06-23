import React, { Component } from "react";

class Header extends Component<any, any> {
  public render() {
    return (
      <header className="header">
        <h1>robot factory</h1>
        <a href="https://www.playtech.com/" target="_blank">
          <img src="logoplaytech.JPG" alt="logo playtech" />
        </a>
      </header>
    );
  }
}

export default Header;
