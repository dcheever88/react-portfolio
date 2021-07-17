import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Navigation from './components/Navigation/Navigation.js';

require('dotenv').config();

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

    
      <Footer />
    </div>
  );
}

export default App;
