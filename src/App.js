import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="about" element={<AboutMe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
