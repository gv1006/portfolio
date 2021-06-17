import React from 'react';
import { Navbar } from '../Navbar/Navbar';
export const Main = (props) => {
  return(
    <header>
       <Navbar />
       <section className="main">
          <h2 className="main-title center">Gowtham Venkatesh KR</h2>
          <p className="main-desc center">I am a <b>web developer</b></p>
          <a className="main-button center">Download Resume</a>
      </section>
    </header>
  );
}