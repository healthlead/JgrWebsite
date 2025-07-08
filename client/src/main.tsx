import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add error boundary for debugging
try {
  console.log('Initializing React app...');
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log('React app rendered successfully');
} catch (error) {
  console.error("App failed to render:", error);
  document.getElementById("root")!.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial;">
      <h1>JGR Construction</h1>
      <p>Error loading app: ${error.message}</p>
      <p>Please check the browser console for more details.</p>
    </div>`;
}
