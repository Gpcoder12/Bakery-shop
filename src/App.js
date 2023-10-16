import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/">
          </Route>
        </Switch>
        <HomePage/>
        <MenuPage/>
        <AboutPage/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

