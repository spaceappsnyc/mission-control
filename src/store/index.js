import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

import saga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(browserHistory)
    )
  )
);

sagaMiddleware.run(saga);
