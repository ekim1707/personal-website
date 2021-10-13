import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NavBar } from './components/NavBar';
import { resources } from "./environment/resources";

export default () => 
    <Router>
        <NavBar />
        <Switch>
            <Route path={ resources.routes.basePath } component={ HomePage } />
        </Switch>
    </Router>;