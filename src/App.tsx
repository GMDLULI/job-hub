import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage'
import ContactPage from "./pages/contact/ContactPage";
import NavBar from "./components/navigation/nav-bar/NavBar";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutPage from "./pages/about/AboutPage";
import SignIn from "./pages/sign-in/SignIn";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return null;
};

const App = () => {

  return (

        <>
       <BrowserRouter>
          <ScrollToHash />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
    </>
  );

}

export default App
