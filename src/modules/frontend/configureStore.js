import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

const configureSore = preloaderstate =>
  createStore(
    rootReducer,
    preloaderstate,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

export default configureSore;
