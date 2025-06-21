import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import "./index.css"
import Activity from "./pages/Activity";
import Navigation from "./layouts/Navigation";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navigation /> 
    <div className="ms-[300px]">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </div>
  </BrowserRouter>
);
