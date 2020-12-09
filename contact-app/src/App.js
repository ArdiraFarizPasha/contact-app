import React from 'react';
import Home from './pages/Home.js'
import Favorite from './pages/FavoriteContact.js';
import AddContact from './pages/AddContact.js';
import EditContact from './pages/EditContact.js';
import ContactDetail from './pages/ContactDetail.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="d-flex justify-content-around navbar navbar-expand-lg navbar-light bg-light">
          <h2><Link to="/" style={{ textDecoration: 'none' }}>ContApp</Link></h2>
            <Link to="/favorite" style={{ textDecoration: 'none' }}>Favorite Contact</Link>
            <Link to="/addContact" style={{ textDecoration: 'none' }}>Add New Contact</Link>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/addContact" component={AddContact} />
          <Route path="/editContact" component={EditContact} />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
