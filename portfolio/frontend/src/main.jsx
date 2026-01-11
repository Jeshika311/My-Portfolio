import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mount ToastContainer into a separate DOM node outside the app root
const toastRoot = document.getElementById('toast-root');
if (toastRoot) {
  ReactDOM.createRoot(toastRoot).render(
    <ToastContainer />
  );
}