import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar/NavBar";
import CountryTabs from "./components/countryTabs/CountryTabs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DataPage from "./views/DataPage/DataPage";
import AboutPage from "./views/AboutPage/AboutPage";

library.add(faUser);

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path='/' component={CountryTabs} exact />
                        <Route path='/data' component={DataPage} exact />
                        <Route path='/about' component={AboutPage} exact />
                    </Switch>
                </div>
            </Router>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
        </div>
    );
}

export default App;
