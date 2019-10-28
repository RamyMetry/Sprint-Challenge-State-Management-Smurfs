import React from "react";
import {createStore ,combineReducers, applyMiddleware} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import App from "./components/App";
import {reducer as smurfsReducer} from "./reducers/getSmurfs";
import {reducer as sendReducer} from "./reducers/sendSmurfs"


const rootReducer = combineReducers({
    smurfs : smurfsReducer,
    send : sendReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    
, document.getElementById("root"));
