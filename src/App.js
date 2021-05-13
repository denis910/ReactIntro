import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

//Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

//Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Event from './pages/Event';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';


function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem('isAdmin') === 'true' ? setIsAdmin(true) : setIsAdmin(false)
    localStorage.getItem('authToken') === null ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Events" component={Events} />
        <Route path="/Event/:id" component={Event} />
        <Route path="/Login" render={() => <Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Register" component={Register} />
        <ProtectedRoute path="/admin" component={Admin} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
