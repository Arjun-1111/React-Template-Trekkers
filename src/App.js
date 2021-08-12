import React from "react";
import HomePage from "./HomePage";
import Treks from "./Treks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="/trek/:id" element={<Treks />} />;
      </Routes>
    </Router>
  );
}

export default App;
