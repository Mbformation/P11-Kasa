import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Property from './pages/Property';
import NotFound from './pages/NotFound';


function App() {
  return (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/property" element={<Property />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
  );
}

export default App;
