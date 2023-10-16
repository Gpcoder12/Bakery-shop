import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import Footer from './Footer';
import './App.css';
import HomePage from './HomePage';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <HomePage/>
        <MenuPage/>
        <AboutPage/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

