import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"
  import Exo1 from "./exo1.jsx"
  import Exo3 from "./exo3.jsx"
  import Exo4 from "./exo4.jsx"
  import Exo5 from "./exo5.jsx"
  import Exo6 from "./exo6.jsx"
  import Exo7 from "./exo7.jsx"
  import logo from './logo.svg';
  import './App.css';
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import "./exos.css"

export default function Exo2() {
  function Exo2_1() {
    return (
      <div className="exo1 d-flex align-items-center justify-content-center">
        <h2>Mettre un écouteur d'événements sur les boutons nav et changer le panel en conséquance</h2>
    </div> 
    )
  }

  return (
    <Router>
    <div className="App">
        <nav>
          <ul className="d-flex flex-row justify-content-center">
            <li className="m-3">
              <Link to="/Exo1">Exo 1</Link>
            </li>
            <li className="m-3">
              <Link to="/Exo2">Exo 2</Link>
            </li>
            <li className="m-3">
              <Link to="/Exo3">Exo 3</Link>
            </li>
            <li className="m-3">
              <Link to="/Exo4">Exo 4</Link>
            </li>
            <li className="m-3">
              <Link to="/Exo5">Exo 5</Link>
            </li>
            <li className="m-3">
              <Link to="/Exo6">Exo 6</Link>
            </li>
            <li className="m-3">
              <Link to="/Exo7">Exo 7</Link>
            </li>
          </ul>
        </nav>

          <Switch>
            <Route path='/Exo1'>
                <Exo1/>
            </Route>
            <Route path='/Exo2'>
              <Exo2_1/>
            </Route>
            <Route path='/Exo3'>
                <Exo3/>
            </Route>
            <Route path='/Exo4'>
                <Exo4/>
            </Route>
            <Route path='/Exo5'>
                <Exo5/>
            </Route>
            <Route path='/Exo6'>
                <Exo6/>
            </Route>
            <Route path='/Exo7'>
                <Exo7/>
            </Route>

          </Switch>
      </div>
  </Router>
  )
}