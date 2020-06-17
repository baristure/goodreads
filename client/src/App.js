import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Book from './components/book/Book'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Book/>
      <Footer/>
    </div>
  );
}

export default App;
