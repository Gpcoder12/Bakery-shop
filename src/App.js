import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/">
            <div className="container">
              <h1>Welcome to Sweet Harmony Bakery</h1>
              <p>where every bite is a delight!</p>
              </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

