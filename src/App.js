import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppContent from './components/appContent/appContent';
import PhotoSlide from './components/photoSlide/photoSlide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
        <PhotoSlide />
        {/* <div className='photoSlide'>
         
        </div> */}
        <AppContent />
        <Footer />
      </div>  
    );
  }
}

export default App;
