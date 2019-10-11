import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Footer from './components/footer/footer'
import Home from './components/Home/home'
import Resume from '../src/components/resume/resume'
import Contact from '../src/components/contact/contact'
import Projects from './components/Projects/project'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div>
      <Nav />
      <Route exact path ="/" component = {Home} />
      <Route exact path ="/resume" component ={Resume} />
      <Route exact path ="/contact" component ={Contact} />
      <Route exact path ="/project" component ={Projects} />
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;
