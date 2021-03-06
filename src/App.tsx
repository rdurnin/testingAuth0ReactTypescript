import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProtectedRoute from './features/auth/ProtectedRoute';

import './app.css';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth0(App);
