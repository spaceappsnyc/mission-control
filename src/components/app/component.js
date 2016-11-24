import React, { Component } from 'react';
import { AppBar, FlatButton, FontIcon } from 'material-ui';

class App extends Component {
  render() {
    const authUrl = process.env.NODE_ENV === 'production' ?
      `https://github.com/login/oauth/authorize?client_id=${this.props.clientId}&scopes=scopes&state=unguessable-string` :
      '//localhost:3000/?access_token=a5fac18cdcbd15c500371d115e381f0bfedd186d';
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
              href={authUrl}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
