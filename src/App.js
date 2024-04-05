// App.js

import React from 'react';
import './App.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Menu from './component/Menu';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer'; // Import Footer component

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Menu />
      <About />
      <Contact />
      <Footer /> {/* Include Footer component */}
    </div>
  );
}

export default App;
