import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import "./index.css";
import App from "./components/App";
import {Reducer as Reducer} from "./reducers/getSmurfs"

const rootReducer = combineReducers({
    smurfs: Reducer
})

const store = createStore(rootReducer, applyMiddleware(logger,thunk))

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>
, document.getElementById("root"));
