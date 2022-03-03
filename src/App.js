import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./asset/css/bootstrap.min.css";
import "./asset/scss/style.scss";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
