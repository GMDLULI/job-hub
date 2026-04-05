import React from 'react'
import NavBar from './components/navigation/nav-bar/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage'
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );

}

export default App
