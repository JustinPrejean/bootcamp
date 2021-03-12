import React, { Component } from "react";
import "../App.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li style={{ borderRight: "1px solid white" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ borderRight: "1px solid white" }}>
            <a href="/stats">Stats</a>
          </li>
          <li
            style={{
              borderRight: "1px solid white",
              width: "32%",
              fontWeight: "bold",
            }}
          >
            <a href="/">IF Tracker</a>
          </li>
          <li style={{ borderRight: "1px solid white" }}>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
