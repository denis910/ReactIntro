import React, { useEffect } from 'react';
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
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

function App() {

  useEffect(() => {
    localStorage.getItem('isAdmin');
    localStorage.getItem('authToken');
  }, []);

  return (
    <>
      <Header/>
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Events" component={Events}/>
        <Route path="/Event/:id" component={Event}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/admin" component={Admin}/>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
