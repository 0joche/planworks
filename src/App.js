import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from '../src/page/components/SearchContext';
import About from './page/About';
import Services from './page/Services';
import Team from './page/Team';
import Projects from './page/Project';
import Blog from './page/Blog';
import Csr from './page/Csr';
import Careers from './page/Career';
import Contact from './page/Contact';
import Main from './page/Main';

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/csr" element={<Csr />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SearchProvider>
    </Router>
  );
};

export default App;