import React, { Component } from "react";

export class AccountLogin extends Component {
  render() {
    return (
      <div>
        <div className="login preview">{/* image of landing page */}</div>
        <div className="login userLogin">
          <div className="loginCard">
            <h2>Account Login</h2>
            <label for="">Username:</label>
            <br />
            <input type="text" placeholder="Type your username" />
            <label for="">Password:</label>
            <input type="text" placeholder="Type your password" /> <br />
            <button type="submit">Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountLogin;
