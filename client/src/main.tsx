import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initLenis } from "./lib/lenis";

// Initialize smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
});

createRoot(document.getElementById("root")!).render(<App />);
