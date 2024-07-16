import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
          <Route path="blog/:id" element={<Blog />} />
        </Route>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
