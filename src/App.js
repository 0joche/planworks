import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import About from './page/About';
import Services from './page/Services';
import Team from './page/Team';
import Project from './page/Project';
import Blog from './page/Blog';
import Csr from './page/Csr';
import Career from './page/Career';
import Contact from './page/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/csr" element={<Csr />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
