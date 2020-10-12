import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import authReducer from "./store/reducer/auth";
import userReducer from "./store/reducer/users";
import shipReducer from "./store/reducer/shippingAgent";
import vesselReducer from "./store/reducer/vessels";
import crewReducer from "./store/reducer/crew";
import arrivalReducer from "./store/reducer/arrival";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  ship: shipReducer,
  vessels: vesselReducer,
  crew: crewReducer,
  arrival: arrivalReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
