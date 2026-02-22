import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ConfigProvider from "./providers/ConfigProvider.tsx";
import LocaleProvider from "./providers/LocaleProvider.tsx";

// Force dark mode for NUI
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ConfigProvider>
  </StrictMode>,
);
