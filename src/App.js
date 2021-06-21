import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Main } from './Components/Main/Main';
import AboutMe from './Components/Aboutme/Aboutme';
import './style.css';

export const App = (props) => {
    return(
        <div>
            <Navbar />
            <Main/>
            <AboutMe />
        </div>
    )
}