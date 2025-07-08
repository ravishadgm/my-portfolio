import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Experience from './pages/experience/Experience';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';


function App() {
  return (
    <div className="appLayout">
      <Router>
        <Header />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
