import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import SuspenseScreen from "./components/Suspense";
import '../src/resources/scss/main/index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <Suspense fallback={<SuspenseScreen />}>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer autoClose={2000} />
  </Suspense>,
  document.getElementById("root")
);
