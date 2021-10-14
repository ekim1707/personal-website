import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CodeCenter } from "./components/CodeCenter";
import { NavBar } from './components/NavBar';
import { ExternalLinks } from "./components/ExternalLinks";
import { resources } from "./environment/resources";

export default () => {
    return <Router>
                <NavBar />
                <ExternalLinks />
                <Switch>
                    <Route exact path={ resources.routes.basePath } component={ HomePage } />
                    <Route exact path={ resources.routes.codingPath } component={ CodeCenter } />
                </Switch>
            </Router>;
}