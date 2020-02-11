import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
 
  render() {
    return (
      <div className="container">
        <header className="header">Logo</header>
        <div className="content">
          <nav className="sidebar">
            <a href="">One</a>
            <a href="">Two</a>
            <a href="">Three</a>
            <a href="">Four</a> 
          </nav>
          <main className="main-area">
            Main Content
          </main>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
