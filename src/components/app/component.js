import React, { Component } from 'react';
import { AppBar, FlatButton, FontIcon } from 'material-ui';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title='Mission Control'
          iconElementRight={this.props.token ? (
            <FlatButton
              label="Log Out"
              icon={<FontIcon className="muidocs-icon-custom-github" />}
              onClick={() => this.props.logout()}
            />
          ) : (
            <FlatButton
              label="Authenticate"
              icon={<FontIcon className="muidocs-icon-custom-github" />}
              href={this.props.authUrl}
            />
          )}
        />
        {this.props.token && this.props.main}
        {!this.props.token && this.props.alt}
      </div>
    );
  }
}
