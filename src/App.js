import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./asset/css/bootstrap.min.css";
import "./asset/scss/style.scss";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
