import React from 'react';
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './components/pages/homepage'
import Books from './components/pages/books'
import Genres from './components/pages/genres'
import About from './components/pages/about'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={HomePage}></Route>
					<Route exact path='/books' component={Books}></Route>
					<Route exact path='/about' component={About}></Route>
					<Route exact path='/genres' component={Genres}></Route>
      <Footer/>
    </div>
  );
}

export default App;
