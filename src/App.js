import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppContent from './components/appContent/appContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
        <AppContent />
        <Footer />
      </div>  
    );
  }
}

export default App;
