import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sobre from "./pages/sobre/Sobre";
import NotFound from "./pages/notfound/NotFound";
import Autores from "./pages/autores/Autores";
import Livros from "./pages/livros/Livros";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/sobre" component={Sobre}/>
            <Route path="/livros" component={Livros}/>
            <Route path="/autores" component={Autores}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
