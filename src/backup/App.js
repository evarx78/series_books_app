import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Contact from './components/Contact'
import Contact from './components/Form'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
        </Switch>

      </div>
    </Router>


  );
}


function Home() {
  return <h2>Home</h2>;
}


