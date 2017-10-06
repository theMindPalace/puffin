import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          
        </main>
        <Footer title="Sarath"></Footer>
      </div>
    );
  }
}

export default App;
