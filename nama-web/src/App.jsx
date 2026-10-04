import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componen/header";
import Home from "./componen/home";
import Conten from "./componen/conten";
import Contact from "./componen/contact";
import Footer from "./componen/footer";

import "./App.css";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((error) => {
            console.log("Autoplay diblokir browser:", error);
          });
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <audio ref={audioRef} loop>
        <source src="/music/Terbuang_dalam_waktu.mp3" type="audio/mpeg" />
      </audio>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Conten />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;