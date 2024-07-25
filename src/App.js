  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import About from './components/About';
  import Home from './components/Home';
  import Header from './components/Header';
  import './styles/App.scss';

  const App = () => {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
      </Router>
    );
  }

  export default App;