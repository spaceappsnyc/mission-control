import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/app';
import Dashboard from './components/dashboard';
import Landing from './components/landing';
import store from './store';
import { checkAuth, logout } from './store/auth';
import 'normalize-css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={syncHistoryWithStore(browserHistory, store)}>
        <Route path="/" component={App} onEnter={checkAuth}>
          <IndexRoute components={{ main: Dashboard, alt: Landing }} />
          <Route path="logout" onEnter={logout} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
