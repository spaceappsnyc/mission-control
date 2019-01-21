import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";

import auth, { saga as authSaga } from "./auth";
import repos, { saga as reposSaga } from "./repos";
import members, { saga as membersSaga } from "./members";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth,
  repos,
  members,
  router: connectRouter(history)
});

export default preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(membersSaga);
  sagaMiddleware.run(reposSaga);

  return store;
};
