import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar/NavBar";
import CountryTabs from "./components/countryTabs/CountryTabs";

library.add(faUser);

function App() {
    return (
        <div className="App">
            <NavBar />
            <div>
                <CountryTabs country1={'United States'} country2={'Italy'}/>
            </div>
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
