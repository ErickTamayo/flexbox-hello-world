import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import Skills from './Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Gallery />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
