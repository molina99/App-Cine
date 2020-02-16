import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import Peliculas from "./components/peliculas";
import Salas from "./components/salas";
import Horarios from "./components/horarios";
import Sala_Pelicula from "./components/sala_pelicula";

render(
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/peliculas" component={Peliculas}></Route>
        <Route exact path="/salas" component={Salas}></Route>
        <Route exact path="/horarios" component={Horarios}></Route>
        <Route exact path="/sala_pelicula" component={Sala_Pelicula}></Route>
      </Switch>
    </Router>,
    document.getElementById("root")
  );

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
