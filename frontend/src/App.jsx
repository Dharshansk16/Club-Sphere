import "./index.css";
import ClubList from "./components/ClubList";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClubList />} />
      </Routes>
    </Router>
  );
}

export default App;
