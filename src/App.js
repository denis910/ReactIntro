import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

//Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Event from './pages/Event';

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Events" component={Events}/>
        <Route path="/Event/:id" component={Event}/>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
