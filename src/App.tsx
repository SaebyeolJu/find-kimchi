import React from "react";

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Game from "./pages/Game";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Report from "./pages/Report";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/report" element={<Report />} />
        <Route path="/game" element={<Game />} />
        <Route path="/kimchi/:searchWord" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
