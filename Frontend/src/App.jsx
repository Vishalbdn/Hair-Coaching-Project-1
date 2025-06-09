import React from "react";
import { ThemeProvider } from "./pages/core/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;