import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router >
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
