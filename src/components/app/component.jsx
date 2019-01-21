import React, { Component } from "react";
import { AppBar, FlatButton, FontIcon } from "material-ui";

import Dashboard from "../dashboard";
import Login from "../login";
import Authenticate from "../authenticate";

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Mission Control"
          iconElementRight={
            this.props.token ? (
              <FlatButton
                label="Log Out"
                icon={<FontIcon className="muidocs-icon-custom-github" />}
                onClick={this.props.logout}
              />
            ) : (
              <Authenticate />
            )
          }
        />
        {this.props.token && <Dashboard />}
        {!this.props.token && <Login />}
      </div>
    );
  }
}
