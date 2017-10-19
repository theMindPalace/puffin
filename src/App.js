import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting'
import Header from './components/Header'
import Footer from './components/Footer'
import BookSearch from './components/pages/BookSearch'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <BookSearch/>
        </main>
        <Footer title="Sarath"></Footer>
      </div>
    );
  }
}

export default App;
