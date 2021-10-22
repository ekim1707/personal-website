import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PopUps } from './common/PopUps';
import { HomePage } from "./components/HomePage";
import { CodeCenter } from "./components/CodeCenter";
import { NavBar } from './components/NavBar';
import { ExternalLinks } from "./components/ExternalLinks";
import { resources } from "./environment/resources";

export default () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const DefaultComponent = () => <div style={{ 
        width: "100%",
        height: "calc(100vh - 130px)",
        background: `url("../../img/inprogress.png") center center / contain no-repeat`
    }}></div>
    return <Router>
                {isOpen && <PopUps 
                    className="siteDisclaimerPopUpsContainer"
                    popUpsStyles={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "4em",
                        fontSize: "2em"
                    }}
                    popUpsContentClassName="siteDisclaimerPopUpsContent"
                    popUpsContent={`Please note: This website was not intended to be responsive. 
                    It is best viewed in Chrome with a standard laptop monitor size. Click the x 
                    icon in the upper right corner to continue.`}
                    isCloseable
                    onClick={() => setIsOpen(false)}
                />}
                <NavBar />
                <ExternalLinks />
                <Switch>
                    <Route exact path={ resources.routes.basePath } component={ HomePage } />
                    <Route exact path={ resources.routes.codingPath } component={ CodeCenter } />
                    <Route component={DefaultComponent} />
                </Switch>
            </Router>;
}