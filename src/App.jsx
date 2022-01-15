import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";
import Navbar from "./Components/Layouts/Navbar.jsx";
import Write from "./Components/Pages/Write/Write.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
