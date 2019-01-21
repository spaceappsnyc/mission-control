import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Route } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import App from "./components/app";
import configureStore, { history } from "./store";
import "normalize-css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        {/* <Switch> */}
        <Route component={App} />
        {/* <Route render={() => <div>Miss</div>} />
        </Switch> */}
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
