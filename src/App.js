import React, {  Suspense } from 'react';
import { Loading } from './Components/Common/Loading/Loading';
import { Navbar } from './Components/Navbar/Navbar';
// import  Main  from './Components/Main/Main';
// import AboutMe from './Components/Aboutme/Aboutme';
import { ContactMe } from './Components/ContactMe/ContactMe';
import Experience from './Components/Experience/Experience';
const Main = React.lazy(() => import('./Components/Main/Main'));
const AboutMe = React.lazy(() => import('./Components/Aboutme/Aboutme'));
import './style.css';

export const App = (props) => {
    return(
        <div>
            <Navbar />
            <Suspense fallback={
                <div className="page-center"><Loading /></div>
            }>
                <Main/>
                <AboutMe />
                <Experience />
                <ContactMe />
            </Suspense>
        </div>
    )
}