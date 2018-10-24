import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import other from './components/other/other';

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Footer/>
          <other/>
      </div>
    );
  }
}

export default App;
