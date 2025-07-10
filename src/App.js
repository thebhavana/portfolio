import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Home />
      <Gallery />
      <Skills />
      <Projects />
      <Experience />
      </main>
      <Contact />
    </>
  );
}

export default App;