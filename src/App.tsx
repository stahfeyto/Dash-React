import React from "react";
import { Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import theme from "./theme";

import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

