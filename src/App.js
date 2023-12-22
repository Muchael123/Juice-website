import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <Footer/>
      
    </div>
  );
}

export default App;
