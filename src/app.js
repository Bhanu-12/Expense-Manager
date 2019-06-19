import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/Approuter";
import { startSetExpenses } from "./actions/expenses";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { login, logout } from "./actions/auth";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasrendered = false;

const renderingApp = () => {
  if (!hasrendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasrendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));  
    console.log(user.uid);
    store.dispatch(startSetExpenses()).then(() => {
      renderingApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    console.log('logged in');
  } else {
    store.dispatch(logout());
    renderingApp();
    history.push("/");
    console.log("logged out");
  }
});
