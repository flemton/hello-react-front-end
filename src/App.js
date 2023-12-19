import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/greet" element={<Greeting />} />
        </Routes>
    </Router>
  );
}

export default App;
