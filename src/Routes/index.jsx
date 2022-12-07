import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/index';
import About from '../Pages/About/index';
import Accommodation from '../Pages/Accommodation/index';
import NotFound from '../Pages/NotFound/index';

function RoutesTree() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/accommodation/:id" element={<Accommodation />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
  
  export default RoutesTree;