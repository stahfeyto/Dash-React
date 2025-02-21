import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import theme from "./theme";

import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";

import Tables from "./pages/tables";
import UsersTable from "./pages/tables/UsersTablePage";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />

            <Route path="tables" element={<Tables />} />
            <Route path="users-table" element={<UsersTable />} />


            {/* */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>...</h2>
      <p>
        <Link to="/">...</Link>
      </p>
    </div>
  );
}
