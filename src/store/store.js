import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";

import { rootSaga } from "./root-saga";

const salaMiddleware = createSagaMiddleware();

const middleWares = [
  salaMiddleware,
  process.env.NODE_ENV !== "production" && logger,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

const persistConfig = { key: "root", storage, whitelist: ["cart"] };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

salaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
