import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Contact from './components/Contact'
import Home from './components/Home'
import User from './components/User'
import Header from './components/Header'
import WatchList from './components/WatchList'

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
              <Link to="/watchlist">Watch List</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/user">Change user</Link>
            </li>
          </ul>
        </nav>

        <Header />


        {/* Le switch fonctionne comme une balise, donc le contenu du composant appellé dans le route s'affichera la ou le switch est placé dans le router  */}
        {/* Donc par exemple, je pourrais créer un deuxième switch avec la route form dans le footer si je voulais  */}
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route path='/watchlist'>
            <WatchList/>
          </Route>
        </Switch>



        <footer>
          <p>Footer</p>
        </footer>


      </div>
    </Router>


  );
}





