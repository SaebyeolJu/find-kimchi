import React from "react";

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Game from "./pages/Game";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Report from "./pages/Report";
import SearchResult from "./pages/SearchResult";

// redux module
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

function App() {
  return (
    <Route>
      <Route path="/" element={<Main />} />
      <Route path="/report" element={<Report />} />
      <Route path="/game" element={<Game />} />
      <Route path="/kimchi" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );
}

export default App;
