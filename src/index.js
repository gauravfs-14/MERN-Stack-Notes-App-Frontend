import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteForm from "./components/NoteForm";
import NoteUpdate from "./components/NoteUpdate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<NoteForm />} />
        <Route path="/update" element={<NoteUpdate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
