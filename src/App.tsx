import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Home';

import Navbar from './components/Navbar';
import About from './components/About';

import Footer from './components/Footer';
import Hobbies from './components/hobbies';
import Experience from './components/Experience';
import Project from './components/project';


// Wrapper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};



const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Hobbies />
            </>
          } 
        />
        <Route path="/portfolio" element={<Project/>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
