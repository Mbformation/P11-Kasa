import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/index';
import About from '../../pages/about/index';
import Accommodation from '../../pages/accommodation/index';
import NotFound from '../../pages/notFound/index';

function RoutesTree() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/accomodation" element={<Accommodation />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
  
  export default RoutesTree;