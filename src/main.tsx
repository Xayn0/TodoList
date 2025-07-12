// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Effect } from "./Effec.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <Effect /> */}
    <App />
  </>
);
