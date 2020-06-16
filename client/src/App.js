import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Book from './components/book/Book'
import Header from './components/header/header'
function App() {
  return (
    <div className="App">
      <Header/>
      <Book/>
    </div>
  );
}

export default App;
