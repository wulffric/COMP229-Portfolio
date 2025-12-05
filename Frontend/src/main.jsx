import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading Content...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </React.StrictMode>
);