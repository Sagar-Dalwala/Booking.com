import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";
import { config } from "./utils/env.js";

// Import your publishable key
const PUBLISHABLE_KEY = config.clerk_publishable_key;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
