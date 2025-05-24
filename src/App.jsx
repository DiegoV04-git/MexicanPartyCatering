import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importar las páginas con React.lazy
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));
const BookUs = lazy(() => import("./pages/BookUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookus" element={<BookUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
