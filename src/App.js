import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ApartmentDetail from './components/ApartmentDetail';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:id" element={<ApartmentDetail />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
