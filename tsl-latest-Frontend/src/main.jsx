import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import AuthProvider from "./Component/context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </AuthProvider>
  </React.StrictMode>
);
