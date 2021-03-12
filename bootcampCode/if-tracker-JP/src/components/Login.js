import React, { Component } from "react";
import AccountLogin from "./AccountLogin";

export class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="preview">
          <img src="" alt="" />
        </div>
        <div className="userLogin">
          <AccountLogin />
        </div>
      </div>
    );
  }
}

export default Login;
