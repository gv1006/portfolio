import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar';
import { Main } from './Components/Main/Main';
import AboutMe from './Components/Aboutme/Aboutme';
import { ContactMe } from './Components/ContactMe/ContactMe';
import './style.css';

export const App = (props) => {
    return(
        <div>
            <Navbar />
            <Main/>
            <AboutMe />
            <ContactMe />
        </div>
    )
}