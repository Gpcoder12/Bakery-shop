import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/">
            <div className="home-container">
              <h1>Welcome to Sweet Harmony Bakery</h1>
              <p>where every bite is a delight!</p>
              </div>
          </Route>
        </Switch>
        <MenuPage/>
        <AboutPage/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

