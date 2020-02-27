import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";

import reducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger]
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware),
)

sagaMiddleware.run(rootSaga);

export default store;